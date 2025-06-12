import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ChangeTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center justify-center hover:text-primary hover:cursor-pointer" onClick={() => {
            switch (theme) {
                case "light":
                    setTheme("dark");
                    break;
                case "dark":
                    setTheme("light");
                    break;
                case "system":
                default:
                    setTheme("light");
                    break;
            }
        }}>
            {theme === "dark" && (
                <Sun />      
            )}
            {theme === "light" && (
                <Moon />
            )}
            <span className="sr-only">Toggle theme</span>
        </div>
    )
}