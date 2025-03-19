import RotationList from "@/components/rotation-list/RotationList";
import { Suspense } from "react";
import Loading from "../loading";

const RotationPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RotationList />
    </Suspense>
  );
};

export default RotationPage;
