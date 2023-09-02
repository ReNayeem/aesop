import Link from "next/link";
import "./../css/content.css";
import Image from "next/image";
import { ContentCard } from "@/types/content";

export default async function Contents({
  contents,
}: {
  contents: ContentCard[];
}) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {contents.slice(0, 5).map((content) => {
        return (
          <Link href={`/content/${content.id}`} key={content.id}>
            <div className="content-anime">
              <Image
                src={content.image}
                className="content-anime-img"
                width={281}
                height={400}
                alt=""
              />
              <div className="content-anime-description">
                {content.name.length < 21 ? (
                  <h5>{content.name}</h5>
                ) : (
                  <h5>{content.name.slice(0, 21) + "..."}</h5>
                )}
                <h6>{content.description.slice(0, 89) + "..."}</h6>
                <p>
                  TV <span className="content-anime-dot"></span> 23m
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
