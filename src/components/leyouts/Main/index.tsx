import React, { useContext } from "react";
import SearchCard from "../SearchCard";
import Form from "../../Form";
import { UserContext } from "../../../context/userContext";
import { userType } from "../../../context/userContextTypes";
import Loading from "../../ui/Loading";
import UserCard from "../UserCard";

function Main() {
  const { user, loading, status } = useContext(UserContext) as userType;

  console.log(user, loading);
  

  return (
    <main className="min-h-screen bg-gray-900 py-10">
      <div className="container flex flex-col items-center justify-center min-h-full">
          <SearchCard>
            <Form />
          </SearchCard>
        {loading && <Loading />}
        {(user !== null && !loading) && (
          <UserCard user={user} />
        )}
        {(status === 404 && !loading) && (
            <SearchCard>
                <h2 className="text-2xl text-gray-200">User not found</h2>
            </SearchCard>
        )}
      </div>
    </main>
  );
}

export default Main;
