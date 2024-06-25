import Image from "next/image";
import { CardBody, CardContainer } from "./ui/3d-card";

export default function FootballPlayerCard() {
  return (
    <CardContainer className="inter-var select-none">
      <CardBody className="group/card relative h-96 w-72 bg-white p-3 text-black">
        <div className="relative h-full w-full overflow-hidden bg-[url('https://i2-prod.dailystar.co.uk/incoming/article32491444.ece/ALTERNATES/s1200b/1_Newcastle-United-v-West-Ham-United-Premier-League.jpg')] bg-cover bg-center">
          <div className="absolute left-2 top-2 flex h-20 w-10 flex-col items-center justify-start gap-2">
            <Image src="/premier-league.png" width={32} height={32} alt="" />
            <Image
              src="https://seeklogo.com/images/U/UEFA_Champions_league-logo-76E1E8D3FA-seeklogo.com.png"
              width={32}
              height={32}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-0 flex h-fit w-full backdrop-blur-lg">
            <div className="mt-auto flex flex-1 flex-col items-center">
              <p className="text-3xl font-bold text-white">70</p>
              <p className="w-full bg-white text-center text-sm font-medium">
                Defence
              </p>
            </div>
            <div className="mt-auto flex h-3/4 flex-1 flex-col items-center bg-white text-center">
              <p className="text-sm font-bold">Alexander Isak</p>
            </div>
            <div className="mt-auto flex flex-1 flex-col items-center">
              <p className="text-3xl font-bold text-white">88</p>
              <p className="w-full bg-white text-center text-sm font-medium">
                Attack
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
