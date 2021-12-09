import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainPorId, setLoading } from "../../redux/actions/index";
import banderas from "../../imagenes/banderas.jpg";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/loading";
import styled from "styled-components";
import mapa from "../../imagenes/mapa.jpg";

const DetailDiv = styled.div`
  margin: 4%;
  display: inline-table;
  background-color: rgb(241, 247, 241);
  width: 300px;
  height: 400px;
  border: 3px solid rgb(63, 52, 52);
  border-radius: 3%;
  opacity: 0.9;
  padding: 5px;
`;

const DivG = styled.div`

background-image: url(${mapa});
background-repeat:no-repeat;
background-size: 100%;
opacity: .9;
`

const Button = styled.button`
   height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  /* overflow: hidden; */
  box-shadow: 0 2px 5px 0;

`

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detalle);
  const loading = useSelector((state) => state.loading);
  // console.log(detail,'------detail')

  useEffect(() => {
    dispatch(obtainPorId(id));
    dispatch(setLoading());
    console.log(id, "--------id-detail");
    console.log(detail, "--------soy detail");
  }, [dispatch]);

  return (
    <DivG>
      <br />
      <div>
        <Link to="/countries">
          <Button>Home</Button>
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <DetailDiv>
          <h2>{detail.name}</h2>
          <img
            src={detail.flag ? detail.flag : banderas}
            alt="Flags of countries"
            width="200xp"
            height="250xp"
          />
          
          <p>
            Continent: <b>{detail.region} </b>
          </p>
          <p>
            Subregion: <b>{detail.subregion}</b>
          </p>
          <p>
            Area: <b>{detail.area} km2</b>
          </p>
          <p>
            Population: <b>{detail.population}</b>
          </p>

          <div>
            <p>
              {" "}
              Activities:{" "}
              <b>
                {detail.activities?.length > 0
                  ? detail.activities?.map((ac) => ac.name + "  ")
                  : "not found activity"}
              </b>
            </p>
          </div>
        </DetailDiv>
      )}
    </DivG>
  );
}

// id={c.id}
// name={c.name}
// flag={c.flag}
// region={c.region}
//pupulation
//subregion
//area en km2--<sup>
