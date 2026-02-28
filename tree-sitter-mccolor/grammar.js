/// <reference types="tree-sitter-cli/dsl" />
// Tree-sitter grammar for Minecraft Bedrock Edition formatting codes.
// Parses § color/format codes, ${variables}, and plain text.

module.exports = grammar({
  name: "mccolor",
  extras: () => [],

  rules: {
    source_file: ($) => repeat($._token),

    _token: ($) => choice(
      // colors
      $.color_black, $.color_dark_blue, $.color_dark_green,
      $.color_dark_aqua, $.color_dark_red, $.color_dark_purple,
      $.color_gold, $.color_gray, $.color_dark_gray, $.color_blue,
      $.color_green, $.color_aqua, $.color_red, $.color_light_purple,
      $.color_yellow, $.color_white, $.color_minecoin,
      // formatting
      $.fmt_obfuscate, $.fmt_bold, $.fmt_strike,
      $.fmt_underline, $.fmt_italic, $.fmt_reset,
      // other
      $.variable, $.escape_section, $.unknown_code,
      $.text, $.newline,
    ),

    // -- Colors (§0-§f, case insensitive for a-f) --
    color_black:       () => "§0",
    color_dark_blue:   () => "§1",
    color_dark_green:  () => "§2",
    color_dark_aqua:   () => "§3",
    color_dark_red:    () => "§4",
    color_dark_purple: () => "§5",
    color_gold:        () => "§6",
    color_gray:        () => "§7",
    color_dark_gray:   () => "§8",
    color_blue:        () => "§9",
    color_green:       () => choice("§a", "§A"),
    color_aqua:        () => choice("§b", "§B"),
    color_red:         () => choice("§c", "§C"),
    color_light_purple:() => choice("§d", "§D"),
    color_yellow:      () => choice("§e", "§E"),
    color_white:       () => choice("§f", "§F"),
    color_minecoin:    () => choice("§g", "§G"),  // Bedrock exclusive

    // -- Formatting --
    fmt_obfuscate: () => choice("§k", "§K"),
    fmt_bold:      () => choice("§l", "§L"),
    fmt_strike:    () => choice("§m", "§M"),
    fmt_underline: () => choice("§n", "§N"),
    fmt_italic:    () => choice("§o", "§O"),
    fmt_reset:     () => choice("§r", "§R"),

    // -- Special --
    variable:        () => prec(2, seq("${", /[^}]+/, "}")),
    escape_section:  () => prec(3, "§§"),
    unknown_code:    () => prec(-1, seq("§", /[^0-9a-gA-Gk-oK-OrR§\n\r$]/)),

    // -- Text --
    text:    () => /[^§$\n\r]+|\$[^{]|\$/,
    newline: () => /\r?\n/,
  },
});
