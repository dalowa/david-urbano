import Image from "next/image";

export default function ProjectsSec() {
  return (
    <section>
      <div>
        <h2>{`=> Projects`}</h2>
        <div>
          <div>
            <Image
              src={"/public/ProjectsImages/TheDefinitiveMainPage.png"}
              alt="The Definitive Main Page"
              width={200}
              height={200}
            />
            <div>
              <h4></h4>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              {/* <ul>
                <li>
                  <Image />
                </li>
                <li>
                  <Image />
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
