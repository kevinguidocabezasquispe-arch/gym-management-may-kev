
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

const navigation = [
  { name: "Members", icon: "members" },
  { name: "Dashboard", icon: "dashboard" },
  { name: "Collection", icon: "collection" },
  { name: "Gym", icon: "gym" },
  { name: "Today Report", icon: "report" },
];

export default function BottomNavigation() {
  return (
    <footer className="z-30 shrink-0 border-t border-[#333] bg-[#292929] pb-[env(safe-area-inset-bottom)]">

      <nav
        aria-label="Bottom navigation"
        className="grid h-[62px] grid-cols-5"
      >

        {navigation.map((item, index) => (

          <Button
            key={item.name}
            disabled={index !== 0}
            aria-current={index === 0 ? "page" : undefined}
            className={`flex flex-col items-center justify-center gap-1 ${
              index === 0
                ? "text-[#9bd900]"
                : "text-white"
            }`}
          >

            <Icon name={item.icon} size={23} />

            <span className="text-[9px]">
              {item.name}
            </span>

          </Button>

        ))}

      </nav>

    </footer>
  );
}
