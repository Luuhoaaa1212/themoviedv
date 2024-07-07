"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

const StoreProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
