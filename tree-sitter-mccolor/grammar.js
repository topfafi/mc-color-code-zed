/// <reference types="tree-sitter-cli/dsl" />
// Grammar for Minecraft Bedrock Edition formatting codes.
// Each §code + the text that follows becomes one parent node,
// so highlights span both the marker and its content.

module.exports = grammar({
  name: "mccolor",
  extras: () => [],

  rules: {
    source_file: ($) => repeat($._segment),

    _segment: ($) => choice(
      $.seg_black, $.seg_dark_blue, $.seg_dark_green, $.seg_dark_aqua,
      $.seg_dark_red, $.seg_dark_purple, $.seg_gold, $.seg_gray,
      $.seg_dark_gray, $.seg_blue, $.seg_green, $.seg_aqua,
      $.seg_red, $.seg_light_purple, $.seg_yellow, $.seg_white,
      $.seg_minecoin,
      $.seg_bold, $.seg_italic, $.seg_underline,
      $.seg_strike, $.seg_obfuscate, $.seg_reset,
      $.variable, $.escape_section, $.unknown_code,
      $.text, $.newline,
    ),

    // -- Color segments --
    seg_black:        ($) => prec.right(seq("§0",              optional($._body))),
    seg_dark_blue:    ($) => prec.right(seq("§1",              optional($._body))),
    seg_dark_green:   ($) => prec.right(seq("§2",              optional($._body))),
    seg_dark_aqua:    ($) => prec.right(seq("§3",              optional($._body))),
    seg_dark_red:     ($) => prec.right(seq("§4",              optional($._body))),
    seg_dark_purple:  ($) => prec.right(seq("§5",              optional($._body))),
    seg_gold:         ($) => prec.right(seq("§6",              optional($._body))),
    seg_gray:         ($) => prec.right(seq("§7",              optional($._body))),
    seg_dark_gray:    ($) => prec.right(seq("§8",              optional($._body))),
    seg_blue:         ($) => prec.right(seq("§9",              optional($._body))),
    seg_green:        ($) => prec.right(seq(choice("§a","§A"), optional($._body))),
    seg_aqua:         ($) => prec.right(seq(choice("§b","§B"), optional($._body))),
    seg_red:          ($) => prec.right(seq(choice("§c","§C"), optional($._body))),
    seg_light_purple: ($) => prec.right(seq(choice("§d","§D"), optional($._body))),
    seg_yellow:       ($) => prec.right(seq(choice("§e","§E"), optional($._body))),
    seg_white:        ($) => prec.right(seq(choice("§f","§F"), optional($._body))),
    seg_minecoin:     ($) => prec.right(seq(choice("§g","§G"), optional($._body))),

    // -- Format segments --
    seg_obfuscate: ($) => prec.right(seq(choice("§k","§K"), optional($._body))),
    seg_bold:      ($) => prec.right(seq(choice("§l","§L"), optional($._body))),
    seg_strike:    ($) => prec.right(seq(choice("§m","§M"), optional($._body))),
    seg_underline: ($) => prec.right(seq(choice("§n","§N"), optional($._body))),
    seg_italic:    ($) => prec.right(seq(choice("§o","§O"), optional($._body))),
    seg_reset:     ($) => prec.right(seq(choice("§r","§R"), optional($._body))),

    // Body text: stops at next § marker or newline
    _body: ($) => repeat1(choice($.variable, $.body_text)),
    body_text: () => /[^§$\n\r]+|\$[^{]|\$/,

    // -- Standalone --
    variable:       () => prec(2, seq("${", /[^}]+/, "}")),
    escape_section: () => prec(3, "§§"),
    unknown_code:   () => prec(-1, seq("§", /[^0-9a-gA-Gk-oK-OrR§\n\r$]/)),
    text:           () => /[^§$\n\r]+|\$[^{]|\$/,
    newline:        () => /\r?\n/,
  },
});
