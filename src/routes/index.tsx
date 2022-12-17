import { Show } from "solid-js";
import { A, createRouteData, useLocation, useRouteData, useSearchParams } from "solid-start";

export function routeData(){

  const [searchParams, setSearchParams] = useSearchParams();

  return createRouteData<number>(()=>{
    return parseFloat(searchParams.test) * Math.round(Math.random()*10)
  })
}

export default function Home() {
  const data = useRouteData<typeof routeData>()

  const location = useLocation();
  return (
    <>
      <p>Url data: {location.query.test}</p>
      <Show when={data()}>
        <p>Route data: {data()}</p>
      </Show>

      <A href={`/?test=${Math.random()}`}>Change query parameter</A>
    </>
  );
}
