export const releases = "https://github.com/ModzarellaHQ/Modzarella/releases/latest";

export type Platform = "mac" | "mac-intel" | "windows" | "linux";

export const downloads: Record<Platform, { label: string; file: string }> = {
  mac: { label: "macOS", file: "Modzarella-mac-apple-silicon.zip" },
  "mac-intel": { label: "macOS (Intel)", file: "Modzarella-mac-intel.zip" },
  windows: { label: "Windows", file: "Modzarella-windows.exe" },
  linux: { label: "Linux", file: "Modzarella-linux.tar.gz" },
};

export const mods = [
  {
    name: "BMW",
    image: "/screens/bmw.jpg",
    text: "Drive an M2 down the hill with real engine sounds, headlights and nitro.",
    keys: ["E", "WASD", "Shift", "H"],
  },
  {
    name: "Guns",
    image: "/screens/guns.jpg",
    text: "A Glock 17 and an AK-47 with recoil, aiming and reloads. Works in first person too.",
    keys: ["1", "2", "LMB", "RMB", "R"],
  },
  {
    name: "Rocket Toilet",
    image: "/screens/toilet.jpg",
    text: "Sit down, hold Space and climb on a column of poop. Steer with WASD, hover with Ctrl.",
    keys: ["T", "Space", "Ctrl"],
  },
  {
    name: "Euphoria",
    image: "/screens/euphoria.jpg",
    text: "Bodies brace, flinch and clutch their wounds instead of flopping. They bleed, lose limbs and die.",
    keys: [],
  },
];

export const builtIn = ["Freecam", "Mouse look", "First person", "Endless rounds", "Frozen bots", "Slow motion"];

export const example = `local key = setting.key{ name = "Super jump", default = "J" }

function update()
  if key.down then
    local me = game.player()
    game.unground(me)
    for _, part in ipairs(body.parts(me)) do
      part.rigidBody.velocity = Vector3.up * 200
    end
  end
end`;
