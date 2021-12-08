import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivity, getActivities } from "../../redux/actions";
import styled from "styled-components";

const Activity = styled.select`
  height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  box-shadow: 0 2px 5px 0;
`;

export default function PorActividad() {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);
  let actArr = activities?.map((act) => act.name);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  function handleActivity(e) {
    dispatch(filterActivity(e.target.value));
  }

  return (
    <div>
      <Activity onChange={(e) => handleActivity(e)}>
        <option>Activities</option>
        {actArr?.map((act) => (
          <option key={act} value={act}>
            {act.charAt(0).toUpperCase() + act.slice(1).toLowerCase()}
          </option>
        ))}
      </Activity>
    </div>
  );
}
