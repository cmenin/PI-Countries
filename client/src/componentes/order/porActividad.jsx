import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivity, getActivities } from "../../redux/actions";

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
      <select onChange={(e) => handleActivity(e)}>
        <option>Activities</option>
        {/* {
             actArr?.map((c)=> 
             
                 <option value={c.name} key={c.id}>{c.name}</option>
                 
                 )
            } */}

        {actArr?.map((act) => (
          <option key={act} value={act}>
            {act.charAt(0).toUpperCase() + act.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
