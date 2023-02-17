import Link from "next/link";
import Glyph from "../../icons/Glyph";

export default function Separator({ href, className, wfull }) {
  const getGlyph = () => {
    const glyph = <Glyph className="w-16" />;

    if (href) {
      return (
        <Link href={href}>
          <a>{glyph}</a>
        </Link>
      );
    }

    return glyph;
  };

  return (
    <div className={className}>
      <div
        className="w-full  	 
         flex mx-auto  space-x-6 items-center"
      >
        <span className="flex-1 h-px bg-white"></span>
        {getGlyph()}
        <span className="flex-1 h-px bg-white"></span>
      </div>
    </div>
  );
}

Separator.defaultProps = {
  className: "",
};
