import React from "react";
import MyCommerce from "../components/MyCommerces";
import { useSelector } from "react-redux";

const MyCommerceScreen = () => {
  const { user } = useSelector((state) => state.usersReducer);
  const { stores } = useSelector((state) => state.storesReducer);
  const myStores = stores.filter((el) => el.superAdmin === user._id);

  const imAdminIn = () => {
    let filter = [];
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].admins.length > 0) {
        for (let j = 0; j < stores[i].admins.length; j++) {
          if (stores[i].admins[j] == user._id) filter.push(stores[i]);
        }
      }
    }
    return filter;
  };

  return (
    <MyCommerce
      myImage={user.image}
      myName={user.name}
      userId={user._id}
      stores={myStores}
      imAdminIn={imAdminIn()}
    />
  );
};

export default MyCommerceScreen;
