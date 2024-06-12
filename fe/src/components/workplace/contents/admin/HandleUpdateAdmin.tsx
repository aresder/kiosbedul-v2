"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  SelectItem,
  Select,
} from "@nextui-org/react";
import { toast } from "react-toastify";

import {
  FormEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import BoxInputComponent from "../../BoxInput";

interface Users {
  id: number;
  username: string;
  password: string;
  status: string;
  registerAt: string;
}

const HandleUpdateAdmin = (users: Users) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [username, setUsername] = useState<string>(users.username);
  const [password, setPassword] = useState<string>(users.password);
  const [status, setStatus] = useState<string>(users.status);
  const [registerAt, setregisterat] = useState<string>(users.registerAt);
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(`http://localhost:5000/users/${users.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        status: status,
        registerAt: registerAt,
      }),
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

    setUsername("");
    setPassword("");
    setStatus("");
    setregisterat("");
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        radius="sm"
        size="sm"
        className="z-10"
        isDisabled={isDisabled}>
        Edit
      </Button>
      <Modal
        aria-label="Modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#162331] z-10"
        isDismissable={false}
        backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Edit user {users.username}
              </ModalHeader>
              <ModalBody>
                <BoxInputComponent
                  input="Username"
                  name="admin-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  label="Username"
                  auto="off"
                />
                <BoxInputComponent
                  input="Password"
                  name="admin-password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  auto="off"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm: justify-between gap-y-4 px-8">
                  {/* <label htmlFor="status" className="text-sm sm:text-base">
                    Status
                  </label> */}
                  <Select
                    size="md"
                    radius="sm"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    isRequired
                    className="text-[#162331]">
                    <SelectItem key="on" value="on" className="text-[#162331]">
                      on
                    </SelectItem>
                    <SelectItem
                      key="off"
                      value="off"
                      className="text-[#162331]">
                      off
                    </SelectItem>
                  </Select>
                </div>
                <div className="hidden">
                  <BoxInputComponent
                    input="Registered at"
                    name="admin-registerat"
                    type="text"
                    value={registerAt}
                    onChange={(e) => setregisterat(e.target.value)}
                    label="registered at"
                    auto="off"
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  radius="sm">
                  Close
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  radius="sm"
                  isLoading={isLoading}>
                  {isLoading ? "Updating..." : "Update"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HandleUpdateAdmin;
