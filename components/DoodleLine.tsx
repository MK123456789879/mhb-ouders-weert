export default function DoodleLine() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 1440 4800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="doodle-path motion-reduce:opacity-70"
        d="M 1120 0
           C 1095 180, 1145 340, 1110 520
           S 1085 860, 1125 1040
           S 1090 1380, 1135 1560
           C 1160 1720, 1105 1880, 1140 2060
           S 1115 2400, 1155 2580
           S 1120 2920, 1165 3100
           C 1190 3260, 1135 3420, 1170 3600
           S 1145 3940, 1185 4120
           S 1150 4460, 1195 4640
           L 1205 4800"
        stroke="#2D7D78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
