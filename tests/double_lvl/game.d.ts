declare class QuestionTutorial extends PIXI.Container {
    private data;
    private showed;
    constructor();
    private onNextClick;
    show: () => void;
    hide: () => void;
    private onHideComplete;
}
declare let jsPDF: any;
declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toString(): string;
}
declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    area: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    top_left: Point;
    top_right: Point;
    bottom_left: Point;
    bottom_right: Point;
    toString(): string;
    hasPoint(point: Point): boolean;
    intersects(rectangle: Rectangle): boolean;
    intersection(rectangle: Rectangle): Rectangle;
}
declare class Base64 {
    constructor();
    decode(data: string): string;
}
declare class Trigonometry {
    static deg2rad(value: number): number;
    static rad2deg(value: number): number;
}
declare class TransparencyHitArea implements PIXI.IHitArea {
    private source;
    private pixelData;
    private width;
    private height;
    constructor(source: PIXI.Sprite);
    private createTextureData;
    getPixel: (x: number, y: number) => number;
    contains: (x: number, y: number) => boolean;
}
declare class DottedLine extends PIXI.Sprite {
    private direction;
    private distance;
    constructor(distance: number, direction: string, color: number, weight: number, strong?: number);
}
declare class TextureHelper {
    static createGradientCanvas: (size: PIXI.Point, colors: string[], points: PIXI.Point[], shadow?: Shadow) => HTMLCanvasElement;
    static createRoudedGradientCanvas: (size: PIXI.Point, colors: string[], points: PIXI.Point[], radius?: number, shadow?: Shadow) => HTMLCanvasElement;
    static createRoundedCanvas: (size: PIXI.Point, fill: string, strokeColor: string, strokeWidth: number, radius: number, offset?: number) => HTMLCanvasElement;
    static createFillCanvas: (size: PIXI.Point, color: string, shadow?: Shadow) => HTMLCanvasElement;
    static createFillCanvasEx: (size: PIXI.Point, color: string, shadow?: Shadow) => HTMLCanvasElement;
    static createGradientTexture: (size: PIXI.Point, colors: string[], points: PIXI.Point[], shadow?: Shadow) => PIXI.Texture;
    static createFillTexture: (size: PIXI.Point, color: string, shadow?: Shadow) => PIXI.Texture;
    static createFillTextureEx: (size: PIXI.Point, color: string, shadow?: Shadow) => PIXI.Texture;
    private static roundRect(ctx, x, y, width, height, radius, fill, stroke);
}
declare class GraphicsHelper {
    static createLine: (width: number, height: number, color: number, alpha?: number) => PIXI.Graphics;
    static createRect: (width: number, height: number, fillColor?: number, fillAlpha?: number, borderWidth?: number, borderColor?: number, borderAlpha?: number) => PIXI.Graphics;
    static createDottedRect: (width: number, height: number, fillColor: number, fillAlpha: number, borderWidth: number, borderColor: number, borderAlpha: number, borderGap?: number) => PIXI.Graphics;
    static createMask: (width: number, height: number, radius?: number) => PIXI.Graphics;
    static createRoundedRect: (width: number, height: number, fillColor?: number, fillAlpha?: number, radius?: number, border?: Object) => PIXI.Graphics;
    static createCircle: (width: number, fillColor?: number, fillAlpha?: number, border?: Object) => PIXI.Graphics;
    static createPoligon: (points: PIXI.Point[], fillColor?: number, fillAlpha?: number, border?: Object) => PIXI.Graphics;
}
declare class Shadow extends Object {
    shadowColor: string;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    constructor();
}
declare class SaveImage {
    private fileName;
    constructor();
    save: (path: string, fileName: string) => void;
    saveCanvas: (canvas: HTMLCanvasElement, fileName: string) => void;
    private onImageLoad;
    private saveData;
    saveCanvasToPDF: (canvas: HTMLCanvasElement, fileName: string) => void;
}
declare function parse_point(value: string): PIXI.Point;
declare var rgba_create: (color: number, alpha?: number) => string;
declare class SpriteGraphics extends PIXI.Graphics {
    private source;
    private pixelData;
    private data_width;
    private data_height;
    constructor(source: PIXI.Sprite);
    private createTextureData;
    getPixel: (x: number, y: number) => number;
    drawData: () => void;
}
declare class Button extends PIXI.Sprite {
    private txtLabel;
    private back;
    private buttonWidth;
    private buttonColor;
    private buttonColorOver;
    private borderColor;
    private borderAlpha;
    constructor(label: string, width?: number);
    private onMouseEvent;
    private update;
    label: string;
    type: string;
}
declare class ImageButton extends PIXI.Sprite {
    constructor(type: string);
    enabled: boolean;
    private onMouseEvent;
}
declare class ImageMarginButton extends PIXI.Sprite {
    private type;
    constructor(type: string, margin?: number);
    enabled: boolean;
    private onMouseEvent;
}
declare class RadioButton extends PIXI.Sprite {
    private type;
    private public_type;
    private selected;
    private over;
    private _enabled;
    constructor(type: string);
    private onAdded;
    private onSelectButton;
    enabled: boolean;
    private onMouseEvent;
    private update;
    select: () => void;
}
declare class ImageStateButton extends PIXI.Sprite {
    private type;
    private useHitArea;
    constructor(type: string, useHitArea?: boolean);
    enabled: boolean;
    private onMouseEvent;
}
declare class LinkButton extends PIXI.Sprite {
    private label;
    private color;
    private over_color;
    private line;
    constructor(label: string, color?: number, over_color?: number);
    enabled: boolean;
    private onMouseEvent;
}
declare class ArgumentsItem extends PIXI.Sprite {
    private data;
    private text;
    private texture_normal;
    private texture_selected;
    private texture_right;
    private texture_wrong;
    private texture_over;
    private texture_missed;
    private over;
    selected: boolean;
    private fixed;
    constructor(data: Object);
    private onAddedEvent;
    private onSelectItem;
    private onPointerEvent;
    private update;
    fix: () => void;
    correct: boolean;
    reset: () => void;
}
declare class ArgumentsPage extends PIXI.Container {
    private data;
    private items;
    private btn_check;
    constructor(data: Object);
    private onItemUpdate;
    private onCheckClick;
    fix: () => boolean;
    show: (reset_arguments: boolean) => void;
    hide: () => void;
    private randomize;
}
declare class IntroItem extends PIXI.Sprite {
    private data;
    selected: boolean;
    constructor(data: Object);
    private onPointerOver;
    private onPointerOut;
    private onPointerDown;
    show: () => void;
    hide: () => void;
}
declare class IntroPopup extends PIXI.Sprite {
    private data;
    private btnClose;
    constructor();
    show: (page: string) => void;
    hide: () => void;
    private onHideComplete;
    private onCloseClick;
}
declare class IntroPage extends PIXI.Container {
    private data;
    private showed_pages;
    constructor(data: Object);
    private onItemSelect;
    show: () => void;
    hide: () => void;
}
declare class QuestionItem extends PIXI.Sprite {
    static ITEM_WIDTH: number;
    static ITEM_HEIGHT: number;
    data: Object;
    private text;
    private moved;
    private delta;
    orig_pos: PIXI.Point;
    private over_texture;
    private placed_texture;
    private normal_texture;
    private right_texture;
    private wrong_texture;
    fixed: boolean;
    place: Place;
    constructor(data: Object, pos: PIXI.Point);
    private onPointerEvent;
    rect: Rectangle;
    dropTo: (position: PIXI.Point) => void;
    right: () => void;
    wrong: () => void;
    fix: () => void;
    return: () => void;
    private onReturnComplete;
    enable: () => void;
    disable: () => void;
    correct: boolean;
    type: number;
}
declare class Place extends Rectangle {
    item: QuestionItem;
    private position;
    fixed: boolean;
    private data;
    constructor(position: number, data: Object);
    add: (item: QuestionItem) => void;
    empty: boolean;
    clear: () => void;
    free: () => void;
    correct: boolean;
    fix: () => void;
    wrong: () => void;
}
declare class QuestionPage extends PIXI.Container {
    private data;
    private items;
    private btn_check;
    private filled;
    private fixed;
    private places;
    constructor(data: Object);
    private sort_areas;
    private onItemDrop;
    private check_filled;
    private onCheckClick;
    retry: () => void;
    private fix_res;
    fix: () => boolean;
    show: () => void;
    hide: () => void;
    private randomize;
    complete: () => void;
}
declare class Reflection extends PIXI.Sprite {
    private data;
    private btnNext;
    private btnClose;
    private text;
    constructor();
    show: (data: Object) => void;
    hide: () => void;
    private onHideComplete;
    private onNextClick;
    private onCloseClick;
}
declare class Tutorial extends PIXI.Container {
    private data;
    constructor();
    private onNextClick;
    show: () => void;
    hide: () => void;
    private onHideComplete;
}
declare let $: any;
declare class Coursmos {
    private static _instance;
    private type;
    private externalCourseId;
    private externalLessonId;
    private courseId;
    private baseUrl;
    private accessToken;
    static instance: Coursmos;
    constructor();
    status: (lesson_id?: string) => void;
    start: (lesson_id?: string) => void;
    complete: (lesson_id?: string) => void;
    private onStatusComplete;
    private onStartComplete;
    private onCompleteComplete;
    private onError;
}
declare class CompilationParams {
    static COMPILATION_DATE: string;
}
declare class Preloader extends PIXI.Sprite {
    private loader;
    private background;
    private preloader;
    private counter;
    private text;
    private arc;
    private timer;
    constructor();
    init: (data: Object) => void;
    private onLoad;
    progress: (current: number, max: number) => void;
    stop: () => void;
    rotate: () => void;
}
declare let pipwerks: any;
declare class Scorm {
    private findAttemptLimit;
    private findAttempts;
    available: boolean;
    private API;
    private local;
    constructor(wnd: Window, version?: string, local?: boolean);
    private findAPI;
    getValue: (key: string) => any;
    setValue: (key: string, value: any) => boolean;
    commit: () => void;
    private unloadHandler;
}
declare class UrlManager {
    private static _instance;
    private data;
    static instance: UrlManager;
    constructor();
    show: (url_type: string) => void;
}
declare class StoryLine {
    private storyLine;
    private player;
    constructor();
    inPlayer: boolean;
    goNext: () => void;
    setVar: (variable: string, value?: any) => void;
    getVar: (variable: string) => any;
}
declare class AssetsManager extends PIXI.Container {
    private callback;
    private static _instance;
    static DATA: string;
    static IMAGE: string;
    static AUDIO: string;
    static VIDEO: string;
    static FILES: string;
    static SYSTEM: string;
    static SYSTEM_IMAGE: string;
    static PRELOADER: string;
    private loader;
    private keys;
    private maxItems;
    private preloader;
    static instance: AssetsManager;
    constructor();
    start: (callback: any) => void;
    private onPreloaderConfigLoad;
    private onPreloaderReady;
    private onProgressLoad;
    private onConfigsLoad;
    private onLoad;
    getResource: (name: string) => PIXI.loaders.Resource;
    getObject: (name: string) => Object;
    getTexture: (name: string) => PIXI.Texture;
    getSprite: (name: string) => PIXI.Sprite;
    stopPreloader: () => void;
}
declare class Music {
    constructor();
    play(): void;
    stop(): void;
}
declare class Sound {
    private skype;
    private sounds;
    constructor();
}
declare let WebFontConfig: any;
declare class FontsManager {
    private static _instance;
    static instance: FontsManager;
    constructor();
    setFonts(value: Array<string>, onLoad: () => void): void;
}
declare class FullScreenManager {
    private static _instance;
    static currentScale: number;
    private canvas;
    private backgroundColor;
    static instance: FullScreenManager;
    constructor();
    init(canvas: HTMLCanvasElement, backgroundColor?: string): void;
    centerFit(): void;
    centerFit2(): void;
    center(): void;
    scale(): void;
    scale_check_mobile(): void;
    scale_mobile(): void;
    scale_desktop(): void;
}
declare class Main extends PIXI.Container {
    static DEBUG: boolean;
    static instance: Main;
    private data;
    private btn_look;
    private tutorial;
    private question_tutorial;
    private reflection;
    private buttons_holder;
    private btn_intro;
    private btn_question;
    private btn_arguments;
    private intro_page;
    private question_page;
    private arguments_page;
    private q_res;
    private a_res;
    private intro_popup;
    constructor();
    private onAssetsLoadComplete;
    private createChildren;
    private onSelectPage;
    private onIntroShowPopup;
    private onIntroComplete;
    private onQuestionComplete;
    private onArgumentsComplete;
    private onReflectionComplete;
    private onReflectionNext;
    private onLookClick;
    private onTutorialComplete;
    private complete;
    private restore_data;
    private save_data;
}
declare class Application {
    private static _instance;
    static WIDTH: number;
    static HEIGHT: number;
    static RENDERER: PIXI.WebGLRenderer;
    static STAGE: PIXI.Container;
    private main;
    private storyLine;
    static instance: Application;
    constructor();
    init: () => void;
    run: () => void;
    terminate: () => void;
    private gameLoop;
}
declare class VideoPreloader extends PIXI.Sprite {
    private timer;
    private counter;
    private preloader_width;
    private preloader_height;
    constructor(width?: number, height?: number);
    init: () => void;
    start: () => void;
    stop: () => void;
    private progress;
}
declare class VideoPreloaderItem extends PIXI.Sprite {
    constructor();
    show: () => void;
    private onComplete;
}
