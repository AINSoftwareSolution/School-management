"use client"
import { Tabs, TabPane } from "../component"

const Login = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    image
                </div>
                <div>
                    <Tabs>
                        <TabPane title="Student">
                            <> student form</>
                        </TabPane>
                        <TabPane title="Parent">
                            <> Parent form</>
                        </TabPane>
                        <TabPane title="Teacher">
                            <>Teacher form</>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>

    )
}

export default Login