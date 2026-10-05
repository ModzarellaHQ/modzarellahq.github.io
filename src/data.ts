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
    name: "Sports Cars",
    image: "bmw",
    text: "Pick a BMW M2, M3 E30, Toyota AE86 or Skyline R34 and race down the hill with nitro.",
  },
  {
    name: "Guns",
    image: "guns",
    text: "A Glock 17, an AK-47, an M4A1 and a Panzerschreck rocket launcher, in third and first person.",
  },
  {
    name: "Rocket Toilet",
    image: "toilet",
    text: "Sit down and blast off on a column of poop, then steer it through the air.",
  },
  {
    name: "Euphoria",
    image: "euphoria",
    text: "Bodies brace, flinch and clutch their wounds instead of flopping. They bleed, lose limbs and die.",
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
