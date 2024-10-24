import { cn } from "../../../Utils/cn";
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Type Definitions
type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

interface FloatingDockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  className?: string;
}

// FloatingDock Component
export const FloatingDock: React.FC<FloatingDockProps> = ({
  items,
  desktopClassName,
  mobileClassName,
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// FloatingDockMobile Component
const FloatingDockMobile: React.FC<FloatingDockProps> = ({
  items,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dockRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => setOpen(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={cn("md:hidden", className)} ref={dockRef}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="mb-2 flex flex-col gap-3">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="h-14 w-14 border-gray-600 border bg-black  shadow-inner shadow-white rounded-full flex items-center justify-center"
                >
                  <div
                    className={`h-7 w-7 ${
                      pathname.endsWith(item.href)
                        ? "text-purple-500"
                        : "text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full border-gray-600 border bg-black  shadow-inner shadow-white flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeInOut",
          }}
          whileHover={{ y: 0 }}
          className="text-neutral-500 "
        >
          <TbLayoutNavbarCollapseFilled className="text-white text-3xl" />
        </motion.div>
      </button>
    </div>
  );
};

// FloatingDockDesktop Component
const FloatingDockDesktop: React.FC<FloatingDockProps> = ({
  items,
  className,
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        `mx-auto text-white hidden md:flex h-16 gap-4 items-end rounded-2xl bg-neutral-900 px-4 pb-3`,
        className
      )}
    >
      <AnimatePresence>
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

// IconContainer Component
function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md  border bg-neutral-800 border-neutral-900 text-white  absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={`flex items-center justify-center text-xl ${
            pathname.endsWith(href) ? "text-purple-500" : "text-white-800"
          }`}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
