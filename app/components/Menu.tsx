import Link from "next/link";
import { menu } from "../constants";

const Menu = () => {
    return (
        <div className="absolute top-full ml-4 mt-2 w-48 rounded-md shadow-lg">
            {menu.map(({ name, path }) => {
                const isExternal = path.startsWith("http");
                if (isExternal) {
                    return (
                        <a
                            key={name}
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full px-4 py-2 text-left hover:bg-white hover:text-black"
                        >
                            {name}
                        </a>
                    );
                } else {
                    return (
                        <Link key={name} href={path} legacyBehavior>
                            <a className="block w-6/12 px-4 py-2 text-left hover:bg-white hover:text-black">{name}</a>
                        </Link>
                    );
                }
            })}
        </div>
    );
};

export default Menu;