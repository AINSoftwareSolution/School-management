'use client'
import { Container, TabPane, Tabs } from "./component";

export default function Home() {
  return (
    <>
      <header className="px-4 bg-white shadow py-2 mb-0">
        <div className="grid grid-cols-2 justify-center">
          <div></div>
          <div className="text-center">
            <h2 className="ng-binding">MerryLand &amp; LEADS High School</h2>
            <p>
              Parge Nagar,,
              Kondhwa BK,
              Pune
              , Pincode: 411048,
              Maharashtra
              , India.
            </p>
            <p>
              <a target="_blank" href="http://www.merryland.in">www.merryland.in</a>
              Ph: 7066339429
              Secondary Ph: 7519555222
              Email: lhsa2023dmin@gmail.com
            </p>
          </div>
        </div>
      </header>
      <Container>
        <></>
      </Container>
    </>
  );
}
