import React from "react";
import moment from "moment";

const Notifictaion = props => {
  const { notifications } = props;

  return (
    <div
      className="section"
      style={{ position: "absolute", left: "60%", top: "10%" }}
    >
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title center">Notifictaion</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <div key={item.id}>
                    <li>
                      <span className="pink-text">{item.user} </span>
                      <span>{item.content}</span>
                      <div className="grey-text note-date">
                        {moment(item.time.toDate()).fromNow()}
                      </div>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifictaion;
