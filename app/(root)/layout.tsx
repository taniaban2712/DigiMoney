import Image from "next/image";
import SideBar from "../../components/sidebar";
import MobileNavbar from "../../components/mobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn={firstname: 'TANIA', lastname: "BANERJEE"}
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>
        <div className="flex size-full flex-col ">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            <div>
              <MobileNavbar user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>   
    </main>
  );
}
