'use client'
import { Container, TabPane, Tabs } from "./component";
import { Login, Register } from "./container";

export default function Home() {
  return (
    <Container>
      <h5 className="text-center my-5">Student Admissions - online Apllication</h5>
      <div className="card block rounded-lg bg-white p-6 shadow-md">
        <Tabs>
          <TabPane title="Login">
            <Login />
          </TabPane>
          <TabPane title="Register">
            <Register />
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
}
