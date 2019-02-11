import React from "react";
import moment from "moment";

const HeaderTitle = () => {
  return (
    <div className="headerTitle">
      <h3>Lambda School</h3>
      <p className="subtitle">
        @LambdaSchool - {moment().format("MMMM Do YYYY, h:mm a")}
      </p>
    </div>
  );
};

export default HeaderTitle;
