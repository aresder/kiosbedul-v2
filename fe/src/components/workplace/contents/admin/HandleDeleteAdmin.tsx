"use client";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Users {
  id: number;
  username: string;
  status: string;
  registerAt: string;
}

const HandleDeleteAdmin = (users: Users) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    const handleReload = () => {
      setIsDisabled(true);
    };
    window.addEventListener("beforeunload", handleReload);
    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  const handleDelete = async (userId: number) => {
    setIsLoading(true);
    await fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    });

    toast.success("User Deleted! Wait for page reload", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
      onClose: () => {
        setIsLoading(false);
        window.location.reload();
        onOpenChange();
      },
    });
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="danger"
        radius="sm"
        size="sm"
        isDisabled={isDisabled}>
        Delete
      </Button>
      <Modal
        aria-label="Modal delete"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#162331]"
        isDismissable={false}
        backdrop="blur"
        placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure remove {users.username}?
              </ModalHeader>
              <ModalFooter>
                <Button
                  color="primary"
                  variant="light"
                  onPress={onClose}
                  radius="sm">
                  Cancel
                </Button>
                <Button
                  color="danger"
                  radius="sm"
                  onPress={() => handleDelete(users.id)}
                  isLoading={isLoading}>
                  {isLoading ? "Deleting..." : "Delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HandleDeleteAdmin;
