// auto generated by freeliner
var v0_NAME = 'AllSegments';
var v0_DESCRIPTION_ = 'Renders all segments';
var v1_NAME = 'SequentialSegments';
var v1_DESCRIPTION_ = 'Renders one segment per beat in order.';
var v2_NAME = 'RunThroughSegments';
var v2_DESCRIPTION_ = 'Render all segments in order in one beat.';
var v3_NAME = 'RandomSegment';
var v3_DESCRIPTION_ = 'Render a random segment per beat.';
var v4_NAME = 'FastRandomSegment';
var v4_DESCRIPTION_ = 'Render a different segment per frame';
var v5_NAME = 'SegmentBranch';
var v5_DESCRIPTION_ = 'Renders segment in branch level augmenting every beat';
var v6_NAME = 'RunThroughBranches';
var v6_DESCRIPTION_ = 'Render throught all the branch levels in one beat.';
var q0_NAME = '#000000';
var q0_DESCRIPTION_ = 'None';
var q1_NAME = '#FFFFFF';
var q1_DESCRIPTION_ = 'white';
var q2_NAME = '#FF0000';
var q2_DESCRIPTION_ = 'red';
var q3_NAME = '#00FF00';
var q3_DESCRIPTION_ = 'green';
var q4_NAME = '#0000FF';
var q4_DESCRIPTION_ = 'blue';
var q5_NAME = '#000000';
var q5_DESCRIPTION_ = 'black';
var q6_NAME = 'pallette 0';
var q6_DESCRIPTION_ = 'Color of 0 index in colorPalette';
var q7_NAME = 'pallette 1';
var q7_DESCRIPTION_ = 'Color of 1 index in colorPalette';
var q8_NAME = 'pallette 2';
var q8_DESCRIPTION_ = 'Color of 2 index in colorPalette';
var q9_NAME = 'pallette 3';
var q9_DESCRIPTION_ = 'Color of 3 index in colorPalette';
var q10_NAME = 'pallette 4';
var q10_DESCRIPTION_ = 'Color of 4 index in colorPalette';
var q11_NAME = 'pallette 5';
var q11_DESCRIPTION_ = 'Color of 5 index in colorPalette';
var q12_NAME = 'pallette 6';
var q12_DESCRIPTION_ = 'Color of 6 index in colorPalette';
var q13_NAME = 'pallette 7';
var q13_DESCRIPTION_ = 'Color of 7 index in colorPalette';
var q14_NAME = 'pallette 8';
var q14_DESCRIPTION_ = 'Color of 8 index in colorPalette';
var q15_NAME = 'pallette 9';
var q15_DESCRIPTION_ = 'Color of 9 index in colorPalette';
var q16_NAME = 'pallette 10';
var q16_DESCRIPTION_ = 'Color of 10 index in colorPalette';
var q17_NAME = 'pallette 11';
var q17_DESCRIPTION_ = 'Color of 11 index in colorPalette';
var q18_NAME = 'RepetitionColor';
var q18_DESCRIPTION_ = 'Cycles through colors of the pallette';
var q19_NAME = 'RandomPrimaryColor';
var q19_DESCRIPTION_ = 'Primary color that should change every beat.';
var q20_NAME = 'PrimaryBeatColor';
var q20_DESCRIPTION_ = 'Cycles through primary colors on beat.';
var q21_NAME = 'HSBFade';
var q21_DESCRIPTION_ = 'HSBFade stored on template/event.';
var q22_NAME = 'FlashyPrimaryColor';
var q22_DESCRIPTION_ = 'Random primary color every frame.';
var q23_NAME = 'FlashyGray';
var q23_DESCRIPTION_ = 'Random shades of gray.';
var q24_NAME = 'RGB';
var q24_DESCRIPTION_ = 'Random red green and blue value every frame.';
var q25_NAME = 'Strobe';
var q25_DESCRIPTION_ = 'Strobes white';
var q26_NAME = 'Flash';
var q26_DESCRIPTION_ = 'Flashes once per beat.';
var q27_NAME = 'JahColor';
var q27_DESCRIPTION_ = 'Red Green Yellow';
var q28_NAME = 'CustomColor';
var q28_DESCRIPTION_ = 'Custom color for template.';
var q29_NAME = 'MillisFade';
var q29_DESCRIPTION_ = 'HSB fade goes along with millis.';
var q30_NAME = 'HSBLerp';
var q30_DESCRIPTION_ = 'HSB fade through beat.';
var e0_NAME = 'Interpolator';
var e0_DESCRIPTION_ = 'Pics a position in relation to a segment';
var e1_NAME = 'CenterSender';
var e1_DESCRIPTION_ = 'Moves between pointA and center';
var e2_NAME = 'CenterSender';
var e2_DESCRIPTION_ = 'Moves between pointA and center';
var e3_NAME = 'HalfWayInterpolator';
var e3_DESCRIPTION_ = 'Moves along segment, but halfway to center.';
var e4_NAME = 'RandomExpandingInterpolator';
var e4_DESCRIPTION_ = 'Provides an expanding random position between segment and center.';
var e5_NAME = 'RandomInterpolator';
var e5_DESCRIPTION_ = 'Provides random position between segment and center.';
var e6_NAME = 'DiameterInterpolator';
var e6_DESCRIPTION_ = 'Rotates with segments as diameter.';
var e7_NAME = 'RadiusInterpolator';
var e7_DESCRIPTION_ = 'Rotates with segments as Radius.';
var e8_NAME = 'SegmentOffsetInterpolator';
var e8_DESCRIPTION_ = 'Prototype thing that offsets the position according to segments X position.';
var e9_NAME = 'OppositInterpolator';
var e9_DESCRIPTION_ = 'invert direction every segment';
var a0_b0_NAME = 'PointBrush';
var a0_b0_DESCRIPTION_ = 'Adjust its size with `w`.';
var a1_b0_NAME = 'line';
var a1_b0_DESCRIPTION_ = 'Perpendicular line brush';
var a2_b0_NAME = 'circle';
var a2_b0_DESCRIPTION_ = 'Brush witha circular appearance.';
var a3_b0_NAME = 'chevron';
var a3_b0_DESCRIPTION_ = 'Chevron v shaped style brush';
var a4_b0_NAME = 'square';
var a4_b0_DESCRIPTION_ = 'Square shaped brush';
var a5_b0_NAME = '+';
var a5_b0_DESCRIPTION_ = '+ shaped brush';
var a6_b0_NAME = 'triangle';
var a6_b0_DESCRIPTION_ = 'Triangular brush.';
var a7_b0_NAME = 'sprinkle';
var a7_b0_DESCRIPTION_ = 'ms paint grafiti style';
var a8_b0_NAME = 'leaf';
var a8_b0_DESCRIPTION_ = 'legalize it';
var a9_b0_NAME = 'custom';
var a9_b0_DESCRIPTION_ = 'Template custom shape, add template to geometryGroup and press `ctrl-d` to set as custom shape.';
var a0_b0_NAME = 'BrushPainter';
var a0_b0_DESCRIPTION_ = 'Place brush onto segment. Affected by `e`.';
var a0_b1_NAME = 'FunLine';
var a0_b1_DESCRIPTION_ = 'Makes a line between pointA and a position.';
var a1_b1_NAME = 'FullLine';
var a1_b1_DESCRIPTION_ = 'Draws a line on a segment, not animated.';
var a2_b1_NAME = 'MiddleLine';
var a2_b1_DESCRIPTION_ = 'line that expands from the middle of a segment.';
var a3_b1_NAME = 'TrainLine';
var a3_b1_DESCRIPTION_ = 'Line that comes out of point A and exits through pointB';
var a4_b1_NAME = 'Maypole';
var a4_b1_DESCRIPTION_ = 'Draw a line from center to position.';
var a5_b1_NAME = 'SegToSeg';
var a5_b1_DESCRIPTION_ = 'Draws a line from a point on a segment to a point on a different segment. Affected by `e`';
var a6_b1_NAME = 'AlphaLine';
var a6_b1_DESCRIPTION_ = 'modulates alpha channel, made for LEDs';
var a0_b3_NAME = 'Painter';
var a0_b3_DESCRIPTION_ = 'Paints stuff';
var a1_b3_NAME = 'Painter';
var a1_b3_DESCRIPTION_ = 'Paints stuff';
var a0_b4_NAME = 'TextWritter';
var a0_b4_DESCRIPTION_ = 'Fit a bunch of text on a segment';
var a1_b4_NAME = 'ScrollingText';
var a1_b4_DESCRIPTION_ = 'Scrolls text, acording to enterpolator';
var a0_b5_NAME = 'Elliptic';
var a0_b5_DESCRIPTION_ = 'Makes a expanding circle with segment as final radius.';
var b0_NAME = 'BrushSegment';
var b0_DESCRIPTION_ = 'Render mode for drawing with brushes';
var b1_NAME = 'LineSegment';
var b1_DESCRIPTION_ = 'Draw lines related to segments';
var b2_NAME = 'PersegmentRender';
var b2_DESCRIPTION_ = 'Things that render per each segment';
var b3_NAME = 'GeometryRender';
var b3_DESCRIPTION_ = 'RenderModes that involve all segments.';
var b4_NAME = 'TextRenderMode';
var b4_DESCRIPTION_ = 'Stuff that draws text';
var b5_NAME = 'CircularSegment';
var b5_DESCRIPTION_ = 'Circles and stuff';
var h0_NAME = 'linear';
var h0_DESCRIPTION_ = 'Linear movement';
var h1_NAME = 'square';
var h1_DESCRIPTION_ = 'Power of 2.';
var h2_NAME = 'sine';
var h2_DESCRIPTION_ = 'Sine ish';
var h3_NAME = 'cosine';
var h3_DESCRIPTION_ = 'cosine';
var h4_NAME = 'boost';
var h4_DESCRIPTION_ = 'half a sine';
var h5_NAME = 'random';
var h5_DESCRIPTION_ = 'random unitInterval every frame';
var h6_NAME = 'targetNoise';
var h6_DESCRIPTION_ = 'fake audio response';
var h7_NAME = 'fixed';
var h7_DESCRIPTION_ = 'fixed at 1.0';
var h8_NAME = 'fixed';
var h8_DESCRIPTION_ = 'fixed at 0.5';
var h9_NAME = 'fixed';
var h9_DESCRIPTION_ = 'fixed at 0.0';
var h10_NAME = 'EaseInOut';
var h10_DESCRIPTION_ = 'Linera eas in and out';
var j0_NAME = 'NotReverse';
var j0_DESCRIPTION_ = 'Goes forward';
var j1_NAME = 'Reverse';
var j1_DESCRIPTION_ = 'Goes reverse';
var j2_NAME = 'mode';
var j2_DESCRIPTION_ = 'abstract';
var j3_NAME = 'TwoTwoReverse';
var j3_DESCRIPTION_ = 'Goes twice forward then twice in reverse';
var j4_NAME = 'RandomReverse';
var j4_DESCRIPTION_ = 'Might go forward, might go backwards';
var i0_NAME = 'single';
var i0_DESCRIPTION_ = 'only draw template once';
var i1_NAME = 'EvenlySpaced';
var i1_DESCRIPTION_ = 'Render things evenly spaced';
var i2_NAME = 'EvenlySpacedWithZero';
var i2_DESCRIPTION_ = 'Render things evenly spaced with a fixed one at the begining and end';
var i3_NAME = 'ExpoSpaced';
var i3_DESCRIPTION_ = 'RenderMultiples but make em go faster';
var i4_NAME = 'TwoFull';
var i4_DESCRIPTION_ = 'Render twice in opposite directions';
var i5_NAME = 'TwoFull';
var i5_DESCRIPTION_ = 'Render twice in opposite directions';
var u0_NAME = 'Disabler';
var u0_DESCRIPTION_ = 'Never render';
var u1_NAME = 'loop';
var u1_DESCRIPTION_ = 'always render';
var u2_NAME = 'Triggerable';
var u2_DESCRIPTION_ = 'only render if triggered';
var u3_NAME = 'Triggerable';
var u3_DESCRIPTION_ = 'only render if triggered';
var u4_NAME = 'SweepingEnabler';
var u4_DESCRIPTION_ = 'render per geometry from left to right';
var u5_NAME = 'SwoopingEnabler';
var u5_DESCRIPTION_ = 'render per geometry from right to left';
var u6_NAME = 'RandomEnabler';
var u6_DESCRIPTION_ = 'Maybe render';
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var FULLSCREEN = false;
var OSC_IN_PORT = 6667;
var OSC_OUT_PORT = 6668;
var OSC_OUT_IP = '127.0.0.1';
var WEBSOCKET_PORT = 8025;
var CURSOR_SIZE = 18;
var CURSOR_GAP_SIZE = 6;
var CURSOR_STROKE_WIDTH = 3;
var GUI_TIMEOUT = 1000;
var NODE_STROKE_WEIGTH = 5;
var NODE_COLOR = -1;
var PREVIEW_LINE_STROKE_WIDTH = 1;
var PREVIEW_LINE_COLOR = -1;
var CURSOR_COLOR = -1;
var SNAPPED_CURSOR_COLOR = -16726016;
var TEXT_COLOR = -1;
var GRID_COLOR = -6908266;
var SEGMENT_COLOR = -4276546;
var SEGMENT_COLOR_UNSELECTED = -9539986;
var BW_BEAMER = false;
var DUAL_HEAD = false;
var INVERTED_COLOR = false;
var BACKGROUND_COLOR = -16777216;
var STROKE_CAP = 2;
var STROKE_JOIN = 8;
var BRUSH_SCALING = false;
var DEFAULT_TEMPO = 1300;
var SEQ_STEP_COUNT = 16;
var RENDERING_PIPELINE = 1;
var EXPERIMENTAL = false;
var DEFAULT_GRID_SIZE = 64;
var DEFAULT_LINE_ANGLE = 30;
var DEFAULT_LINE_LENGTH = 128;
var MOUSE_DEBOUNCE = 100;
var SCROLLWHEEL_SELECTOR = true;
var MAKE_DOCUMENTATION = true;
var PALLETTE_COUNT = 12;
var LED_SERIAL_PORT = '/dev/ttyACM0';
var LED_SYSTEM = 1;
var MAX_REPETITION = 255;
var r_MAX = 255;
var MAX_BEATDIVIDER = 255;
var x_MAX = 255;
var MAX_STROKE_WEIGHT = 255;
var w_MAX = 255;
var MAX_STROKE_ALPHA = 255;
var k_MAX = 255;
var MAX_FILL_ALPHA = 255;
var l_MAX = 255;
var MAX_BRUSH_SIZE = 4000;
var s_MAX = 4000;
var MAX_RENDER_LAYER_COUNT = 2;
var p_MAX = 2;
var ANIMATION_MODE_MAX = 14;
var a_MAX = 14;
var ROTATION_MODE_COUNT = 5;
var o_MAX = 5;
var EASING_MODE_COUNT = 11;
var h_MAX = 11;
var REVERSE_MODE_COUNT = 5;
var j_MAX = 5;
var RENDER_MODE_COUNT = 6;
var b_MAX = 6;
var REPEATER_MODE_COUNT = 6;
var i_MAX = 6;
var ENABLER_MODE_COUNT = 7;
var u_MAX = 7;
var COLOR_MODE_COUNT = 31;
var q_MAX = 31;
var INTERPOLATOR_MODE_COUNT = 10;
var e_MAX = 10;
var SEGMENT_MODE_COUNT = 7;
var v_MAX = 7;
