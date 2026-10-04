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
    image: "bmw",
    text: "Drive an M2 down the hill with real engine sounds, headlights and nitro.",
  },
  {
    name: "Guns",
    image: "guns",
    text: "A Glock 17 and an AK-47 with recoil, aiming down sights and reloads, in third and first person.",
  },
  {
    name: "Rocket Toilet",
    image: "toilet",
    text: "Sit down, hold Space and climb on a column of poop. Steer with WASD, hover with Ctrl.",
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
