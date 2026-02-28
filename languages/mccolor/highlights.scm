; Minecraft Bedrock color & formatting codes
; Maps each tree-sitter node to a highlight name used by the theme.

; Colors §0-§f
(color_black)       @color.black
(color_dark_blue)   @color.dark_blue
(color_dark_green)  @color.dark_green
(color_dark_aqua)   @color.dark_aqua
(color_dark_red)    @color.dark_red
(color_dark_purple) @color.dark_purple
(color_gold)        @color.gold
(color_gray)        @color.gray
(color_dark_gray)   @color.dark_gray
(color_blue)        @color.blue
(color_green)       @color.green
(color_aqua)        @color.aqua
(color_red)         @color.red
(color_light_purple)@color.light_purple
(color_yellow)      @color.yellow
(color_white)       @color.white

; Bedrock exclusive
(color_minecoin)    @color.minecoin

; Formatting
(fmt_obfuscate)     @format.obfuscated
(fmt_bold)          @format.bold
(fmt_strike)        @format.strikethrough
(fmt_underline)     @format.underline
(fmt_italic)        @format.italic
(fmt_reset)         @format.reset

; Variables like ${player_name} aren't affected by color codes
(variable)          @variable

; §§ shows a literal §
(escape_section)    @escape

; Unrecognized § codes just render as plain text
(unknown_code)      @text

; Everything else
(text)              @text
(newline)           @text
