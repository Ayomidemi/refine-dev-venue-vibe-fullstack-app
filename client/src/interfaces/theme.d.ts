import "@pankod/refine-mui";

declare module "@pankod/refine-mui" {
  interface Theme extends import("@pankod/refine-mui").Theme, CustomTheme {}
  interface ThemeOptions
    extends import("@pankod/refine-mui").ThemeOptions,
      CustomTheme {}
}
