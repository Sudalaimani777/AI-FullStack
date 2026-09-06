import { getAuthSession } from "@/lib/auth";

const Dashboard = async () => {

    const session = await getAuthSession();

    if (!session) {
        return <section className="flex justify-center items-center h-screen w-full">
            <h1>Not Authenticated</h1>
        </section>
    }

    return (
        <>
            <section className="flex justify-center items-center h-screen w-full">
                <h1>Welcome back, {session.user.name}</h1>
            </section>
        </>
    )
}

export default Dashboard;