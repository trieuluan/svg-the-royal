import React from "react";

if (process.env.APP_ENV === "web") require("./index-web");
else require("./index-plugin");
