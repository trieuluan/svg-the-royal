import React from "react";

if (process.env.REACT_APP_ENV === "web") require("./index-web");
else require("./index-plugin");
