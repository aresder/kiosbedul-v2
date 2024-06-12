const GetUsers = async (API: string, method: string, cache: any) => {
  const res = await fetch(API, {
    cache: cache,
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

export default GetUsers;
