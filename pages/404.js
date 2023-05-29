import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     setTimeout(() => router.push("/"), 2000);
  //   }, [router]);

  return (
    <div className="loading-page px-4">
      <div className="page-404">
        <h1 className="text-[30px]">Sorry, Page not found!</h1>
        <p>Page you are requested for is corrently unavailable.</p>
        <Link href="/">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
