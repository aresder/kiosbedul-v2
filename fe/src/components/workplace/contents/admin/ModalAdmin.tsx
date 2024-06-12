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

import { FormEventHandler, useEffect, useState } from "react";
import BoxInputComponent from "../../BoxInput";

const ModalAdminComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [registerAt, setregisterat] = useState<string>("20/20/2020");
  const [isLoading, setIsLoading] = useState<any>(false);

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
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
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

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return await res.json();
    };

    toast
      .promise(
        fetchData(),
        {
          pending: "Processing...",
          success: "Done! Wait for page reload",
          error: "Failed! Try again",
        },
        {
          position: "top-center",
          pauseOnHover: false,
          autoClose: 1000,
          onClose: () => {
            setIsLoading(false);
            window.location.reload();
            onOpenChange();
          },
        }
      )
      .then(() => {
        setUsername("");
        setPassword("");
        setStatus("");
        setregisterat("");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        radius="sm"
        className="z-10"
        isDisabled={isDisabled}>
        Add admin
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
                Add admin
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
                    label="Registered at"
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
                  {isLoading ? "Submiting..." : "Submit"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdminComponent;
