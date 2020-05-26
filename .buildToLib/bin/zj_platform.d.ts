declare module lzm {
    class BasePanel extends egret.DisplayObjectContainer {
        constructor();
        addToStage(e: egret.Event): void;
        removeFromStage(e: egret.Event): void;
        gotoPanel(panel: lzm.BasePanel): void;
        dispose(): void;
    }
}
declare module lzm {
    class Gestures {
        protected _target: egret.DisplayObject;
        protected _callBack: Function;
        private _enabled;
        constructor(target: egret.DisplayObject, callBack?: Function);
        onTouch(e: egret.TouchEvent): void;
        /**
         * 检测手势
         * */
        checkGestures(touch: Touch): void;
        readonly target: egret.DisplayObject;
        setEnabled(value: boolean): void;
        getenabled(): boolean;
        dispose(): void;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**Sprite*/
    class SwfSprite extends egret.DisplayObjectContainer {
        getTextField(name: string): egret.TextField;
        getMovie(name: string): starlingswf.SwfMovieClip;
        getSprite(name: string): starlingswf.SwfSprite;
        getImage(name: string): egret.Bitmap;
        getButton(name: string): starlingswf.SwfButton;
    }
}
declare module kelvin.texas {
    class BaseApi {
        private static _host;
        private static _port;
        private static _socketClient;
        private static _sendQueue;
        private static _sendTimerQueue;
        private static _callBackQueue;
        private static _currentSendObject;
        private static _commands;
        private static _commandsThisObjects;
        private static _cmdDataQueue;
        private static _isError;
        static ms: number;
        static msTotal: number;
        static msDelay: number;
        static msDelayTimer: number;
        static msStartTime: number;
        static msRequestCount: number;
        /**
         * 初始化baseapi
         */
        static init(host: string, port: number): void;
        private static onConnect();
        private static onConnectClose();
        private static onIOError();
        private static onData(data);
        static requestUser(pars: any, callBack: Function, errorCallBack: Function): void;
        static requestLogic(pars: any, callBack: Function, errorCallBack: Function, finishOnClient?: boolean): void;
        static request(path: string, pars: any, callBack: Function, errorCallBack: Function, finishOnClient?: boolean): void;
        /**
         * 发送数据
         */
        private static sendObject(obj);
        /***
         * 清除所有命令
         */
        static clearCmd(): void;
        /**
         * 注册命令
         */
        static registerCmd(cmd: string, callBack: Function, thisObj: any, isHead?: boolean): void;
        /**
         * 移除命令
         */
        static removeCmd(cmd: string, callBack: Function, thisObj: any): void;
        /**
         * 派发命令消息
         */
        static dispatchCmd(cmd: string, data: any): void;
        static msStart(): void;
        static msEnd(): void;
        static msDelayRefresh(): void;
    }
}
declare module kelvin.texas {
    class NativeBase {
        static wxRespCallBacks: any;
        /**
         * 注册命令
         */
        static registerCmd(cmd: string, callBack: Function, thisObj: any, isHead?: boolean): void;
        /**
         * 移除命令
         */
        static removeCmd(cmd: string, callBack: Function, thisObj: any): void;
        /**
         * 派发命令消息
         */
        static dispatchCmd(cmd: string, data: any): void;
    }
}
declare module kelvin.texas {
    class BasePanel extends lzm.BasePanel {
        mainAsset: starlingswf.SwfSprite;
        closeBtn: starlingswf.SwfButton;
        scrollView: ScrollView;
        refreshData: boolean;
        protected recursiveBind: boolean;
        constructor(needScrollView?: boolean, recursiveBind?: boolean, createLater?: boolean);
        protected createLater(): void;
        private _addToStage_(e);
        private _removeFromStage_(e);
        private onResize(e);
        addToStage(e: egret.Event): void;
        /**
         * 初始化下拉刷新  true是下拉刷新 false 是上拉刷新
         */
        private refreshType;
        initDownRefresh(type?: boolean): void;
        /**
         * 设置刷新回调
         *
         */
        private callBank;
        setDownRefresh(callback: Function): void;
        /**
         * 刷新回掉
         */
        onDownRefresh(): void;
        /**
         * 下拉刷新完成
         */
        downRefreshOver(): void;
        /**
         * 移除下拉刷新
         */
        disposeDownRefresh(): void;
        private scrollViewMoveHandler(evt);
        private scrollViewEndMoveHandler(evt);
        init(): void;
        layout(): void;
        on_closeBtn(e: egret.Event): void;
        dispose(): void;
        mainAssetName(): string;
        assetSwf(): starlingswf.Swf;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 战绩的主面板
 */
declare module kelvin.texas {
    class GameRankView extends BasePanel {
        constructor(matchid: string, roomid: number, cardData: any, watchPeople: number);
        private cardData;
        private watchPeople;
        private roomid;
        private matchid;
        private view;
        private bgSp;
        private bg;
        unchooseRank: egret.TextField;
        unchooseCard: egret.TextField;
        chooseRankBtn: starlingswf.SwfButton;
        chooseCardBtn: starlingswf.SwfButton;
        private rankUI;
        private cardUI;
        private createGameScene();
        on_chooseRankBtn(e: egret.TouchEvent): void;
        on_chooseCardBtn(e: egret.TouchEvent): void;
        show(): void;
        hide(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**
     * Swf文档类
     * */
    class Swf {
        static dataKey_Sprite: string;
        static dataKey_Image: string;
        static dataKey_MovieClip: string;
        static dataKey_TextField: string;
        static dataKey_Button: string;
        static dataKey_Scale9: string;
        static dataKey_ShapeImg: string;
        static dataKey_Component: string;
        static dataKey_Particle: string;
        private _createDisplayFuns;
        private _swfData;
        swfUpdateManager: starlingswf.SwfUpdateManager;
        constructor(swfData: Object, fps?: number);
        createSprite(name: string, data?: any[], sprData?: any[]): starlingswf.SwfSprite;
        createMovie(name: string, data?: any[]): starlingswf.SwfMovieClip;
        /**
         * 创建按钮
         * */
        createButton(name: string, data?: any[]): starlingswf.SwfButton;
        createImage(name: string, data?: any[]): egret.Bitmap;
        createS9Image(name: string, data?: any[]): egret.Bitmap;
        createShapeImage(name: string, data?: any[]): egret.Bitmap;
        createTextField(name: String, data?: any[]): egret.TextField;
        /** 创建文本的滤镜 */
        createTextFieldFilter(textField: egret.TextField, filterObjects: Object): void;
    }
}
declare module starlingswf {
    class SwfAnalyzer extends RES.BinAnalyzer {
        constructor();
        /**
         * 解析并缓存加载成功的数据
         */
        analyzeData(resItem: RES.ResourceItem, data: any): void;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /** 动画更新管理器 */
    class SwfUpdateManager {
        private _animations;
        private _addQueue;
        private _removeQueue;
        private _fps;
        private _fpsTime;
        private _currentTime;
        static createSwfUpdateManager(fps: number): SwfUpdateManager;
        setFps(fps: number): void;
        addSwfAnimation(animation: starlingswf.ISwfAnimation): void;
        removeSwfAnimation(animation: starlingswf.ISwfAnimation): void;
        private updateAdd();
        private updateRemove();
        private update(time);
    }
}
/**
 * Created by zmliu on 14-9-25.
 */
declare module starlingswf {
    class SwfBlendMode {
        static modes: Object;
        static setBlendMode(display: egret.DisplayObject, blendMode: string): void;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**
     * 动画接口
     * */
    interface ISwfAnimation {
        update(): void;
        getStage(): egret.Stage;
    }
}
declare module starlingswf {
    class SwfButton extends starlingswf.SwfSprite {
        static onClick: string;
        static defSound: egret.Sound;
        skin: egret.DisplayObject;
        defScale: number;
        private _w;
        private _h;
        touchScale: number;
        constructor(skin: egret.DisplayObject);
        isScale: boolean;
        mouseDown(evt: egret.TouchEvent): void;
        mouseUp(evt: egret.TouchEvent): void;
        mouseClick(evt: egret.TouchEvent): void;
        setEnable(val: boolean): void;
        dispose(): void;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    class SwfMovieClip extends starlingswf.SwfSprite implements starlingswf.ISwfAnimation {
        private _ownerSwf;
        private _frames;
        private _labels;
        private _frameEvents;
        private _displayObjects;
        private _startFrame;
        private _endFrame;
        private _currentFrame;
        private _currentLabel;
        private _isPlay;
        loop: boolean;
        private _completeFunction;
        private _hasCompleteListener;
        constructor(frames: any[], labels: any[], displayObjects: Object, ownerSwf: starlingswf.Swf, frameEvents?: Object);
        getStage(): egret.Stage;
        update(): void;
        private __frameInfos;
        setCurrentFrame(frame: number): void;
        getCurrentFrame(): number;
        /**
         * 播放
         * */
        play(): void;
        /**
         * 停止
         * @param	stopChild	是否停止子动画
         * */
        stop(stopChild?: boolean): void;
        gotoAndStop(frame: Object, stopChild?: boolean): void;
        gotoAndPlay(frame: Object): void;
        private goTo(frame);
        private getLabelData(label);
        /**
         * 是否再播放
         * */
        isPlay(): boolean;
        /**
         * 总共有多少帧
         * */
        totalFrames(): number;
        /**
         * 返回当前播放的是哪一个标签
         * */
        currentLabel(): string;
        /**
         * 获取所有标签
         * */
        labels(): any[];
        /**
         * 是否包含某个标签
         * */
        hasLabel(label: String): Boolean;
        addEventListener1(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        removeEventListener1(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        private addChildNew(child);
        private removeAllChilds();
        getDisplay(name: string): egret.DisplayObject;
    }
}
declare class AssetAdapter implements eui.IAssetAdapter {
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    getAsset(source: string, compFunc: Function, thisObject: any): void;
}
declare module lzm {
    class HttpClient {
        /**
         * 请求url
         */
        static send(url: string, params: Object, completeFunction?: Function, timeoutFunction?: Function, method?: String): void;
        static getRequestPars(params: Object): string;
    }
}
declare module lzm {
    class JSONWebSocketClient {
        private socket;
        private host;
        private port;
        isConnect: boolean;
        onConnectCallBack: Function;
        onIOErrorCallBack: Function;
        onCloseCallBack: Function;
        onDataCallBack: Function;
        constructor(host: string, port: number);
        connect(): void;
        sendData(data: Object): void;
        private onSocketOpen();
        private onReceiveMessage(e);
        private onSocketClose(e);
        private onSocketIOError(e);
        dispose(): void;
    }
}
declare module kelvin.texas {
    class Starup extends egret.DisplayObjectContainer {
        starupUi: starlingswf.SwfSprite;
        homeSp: egret.Sprite;
        gameSp: egret.Sprite;
        popupSp: egret.Sprite;
        commonPopSp: egret.Sprite;
        promptSp: egret.Sprite;
        static stageSp: Starup;
        constructor();
        private onAddToStage(event);
        /**
         * 资源配置加载完成
         */
        private loadResConfigCallBack(data);
        /**
         * 初始化资源组 加载回调
         */
        private loadResCallBack(data);
    }
}
declare module lzm {
    class Alert {
        static background: egret.Shape;
        private static dialogs;
        private static root;
        private static stageWidth;
        private static stageHeight;
        private static alertScale;
        private static landscapeRotation;
        static init(root: egret.DisplayObjectContainer, stageWidth: number, stageHeight: number, alertScale?: number, landscapeRotation?: number): void;
        private static container();
        private static width();
        private static height();
        private static initBackGround();
        static show(display: egret.DisplayObject): void;
        static alertLandscape(display: egret.DisplayObject): void;
        static alert(dialog: egret.DisplayObject, setXY?: boolean): void;
        private static dialogAddToStage(e);
        private static dialogRemoveFromStage(e);
        static closeAllAlert(): void;
    }
}
declare module kelvin.texas {
    class BaseApiCmdInit {
        static initCmds(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛接口
 *
 */
declare module kelvin.texas {
    class MatchApi extends BaseApi {
        static getMatchList(type1: number, type: string, callBack: Function): void;
        static getMatchListWithType1(type1: number, title_id: string, callBack: Function): void;
        static getMatchInfo(mid: string, callBack: Function): void;
        static getMatchRooms(mid: string, callBack: Function): void;
        static apply(id: string, callBack: Function, error?: Function): void;
        static cancelApply(id: string, callBack: Function, error?: Function): void;
        static getMyMatch(callBack: Function): void;
        static getMatchRoleInfo(page: number, mid: string, callBack: Function): void;
        static getMatchRoomRoleInfo(room_id: number, callBack: Function): void;
        static getPlayerInfo(uid: string, mid: string, callBack: Function, error?: Function): void;
        static getShiShiZhanJi(mid: string, callBack: Function, error?: Function): void;
        static getRoleZhanJi(callBack: Function, error?: Function): void;
        static getMatchZhanji(id: string, callBack: Function, error?: Function): void;
        static getMasterPoints(callBack: Function, error?: Function): void;
        static getTitleConfig(type1: number, callBack: Function, error?: Function): void;
        static getPlayerProps(callBack: Function, error?: Function): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 * 公告Api
 */
declare module kelvin.texas {
    class NoticeApi extends BaseApi {
        static getNotices(callBack: Function): void;
        static getActivityNotices(callBack: Function): void;
    }
}
declare module kelvin.texas {
    class PhoneApi {
        static isVert(callBack: Function): any;
        static genCode(tel: string, callBack?: Function, self?: any): any;
        static vert(tel: string, pwd: string, code: string, callBack: Function, self: any): any;
    }
}
declare module kelvin.texas {
    class RoleApi extends BaseApi {
        static syncRole(): void;
        static getMessage(callBack: Function): void;
        static clearMessage(callBack: Function): void;
        static getRewardInfo(callBack: Function): void;
        static updateRewardInfo(name: string, pid: string, aliAccount: string, callBack: Function): void;
    }
}
declare module kelvin.texas {
    class RoomApi extends BaseApi {
        static joinGame(mid: string, room_id: number, callBack: Function): void;
        static leaveGame(callBack: Function): void;
        static getPlayerMatchRoomId(mid: string, targetUid: string, callBack: Function, error?: Function): void;
        /**
         * 向游戏发送数据
         */
        static gameMessage(messageData: any, finishOnClient?: boolean): void;
        static on_joinRoom(data: any): void;
        static on_leaveRoom(data: any): void;
        static on_leaveGame(data: any): void;
        static on_returnGame(data: any): void;
    }
}
declare module kelvin.texas {
    class UserApi extends BaseApi {
        static register(account: string, pwd: string, recommend: string, callBack: Function, wxRole?: any, error?: Function): void;
        static login(account: string, pwd: string, callBack: Function, errcall?: Function): void;
        static resetfd(): void;
        static initLoginData(data: any): void;
        static loginGetCode(account: string, callBack: Function): void;
        static loginAgainPassword(account: string, newPwd: string, code: string, callBack: Function, error?: Function): void;
    }
}
declare module kelvin.texas {
    class AssetManager {
        static is_local: boolean;
        /**
         * 游戏启动的时候 初始化一波资源
         */
        static initWithStart(callBack: Function, callBackThisObj: any): void;
        /**
         * 加载资源配置
         */
        static loadConfig(url: string, resourceRoot: string, callBack: Function, callBackThisObj: any): void;
        /**
         * 加载资源组
         */
        static loadGroup(name: string, callBack: Function, callBackThisObj: any): void;
        static readonly starupSwf: starlingswf.Swf;
        static readonly loadingSwf: starlingswf.Swf;
        static readonly mainSwf: starlingswf.Swf;
    }
}
declare module kelvin.texas {
    class GameAssetLoader {
        static lastLoadGameRes: any;
        callBack: Function;
        CallBackThisObj: any;
        /**
         * 加载游戏资源
         */
        loadGame(callBack: Function, callBackThisObj: any): void;
        onLoadAssetConfComplete(data: any): void;
        onLoadAssetComplete(data: any): void;
        /**
         * 卸载资源配置
         */
        unConfig(config: any): void;
    }
}
declare module kelvin.texas {
    class JSAnalyzer extends RES.BinAnalyzer {
        static jsDic: any;
        constructor();
        /**
         * 解析并缓存加载成功的数据
         */
        analyzeData(resItem: RES.ResourceItem, data: any): void;
    }
}
declare module kelvin.texas {
    class SoundManager {
        static currentGameSounds: any;
        static currentGameSoundChannels: any;
        static currentGameSoundUrls: any;
        static currentBgName: string;
        static changyongSounds: any;
        static changyongSoundChannels: any;
        static setGameConfig(): void;
        static setCurrentGameSoundVolume(volume: number): void;
        static recoveryCurrentGameSoundVolume(): void;
        static playPreSound(name: string, loops?: number): void;
        static playGameSound(name: string, loops?: number, volume?: number): void;
        static playBgSound(name: string): void;
        static stopGameSound(name: string): void;
        private static _isMute;
        static setSoundMute(ismute: boolean): void;
        private static playSound(name, loops?, volume?);
        static disposeSounds(): void;
        /**
         * 播放常用语
         */
        static playChangYongYu(name: string): void;
        private static _messageStete;
        static setMessageState(bool: boolean): void;
        static playMessage(name: string, volume?: number, loops?: boolean): void;
        static playMsgPreSound(name: string, volume: number, loops: boolean): void;
        static playMsNoPreSound(name: string, volume: number, loops: boolean): void;
    }
}
declare module kelvin.texas {
    class App {
        static stageRealWidth: number;
        static stageRealHeight: number;
        static designWidth: number;
        static designHeight: number;
        static stageWidth: number;
        static stageHeight: number;
        static stage: egret.Stage;
        static appRoot: egret.DisplayObjectContainer;
        static topContainer: egret.DisplayObjectContainer;
        static _isLandscape: boolean;
        static alertScale: number;
        static gameing: boolean;
        private static gamelandscapeRotation270;
        static init(stage: egret.Stage, appRoot: egret.DisplayObjectContainer): void;
        static setOrientationMode(mode: string): void;
        private static onActive(e);
        private static onDeActive(e);
        static onResize(e: egret.Event): void;
        static isLandscape: boolean;
        static heart(): void;
        static heartFun(): void;
        /**
         * 设置游戏横屏时 是否旋转270度
         */
        static setGamelandscapeRotation270(val: boolean): void;
        /**
         * 获取游戏横屏时 是否旋转270度
         */
        static getGamelandscapeRotation270(): boolean;
        /**
         * 获取横屏旋转角度
         */
        static getRotationValue(): number;
        /**
         * 操作系统是否为iOS
         */
        publi: any;
        static isiOS(): boolean;
        /**
         * 操作系统是否为android
         */
        static isAndroid(): boolean;
        /**
         * 是否在微端中运行
         */
        static isWeiDuan(): boolean;
        /**
         * 关闭微端启动页
         */
        static closeWeiduanLoadingPage(): void;
        static openUrl(url: string): void;
    }
}
declare module kelvin.texas {
    class AppConfig {
        static server_ip: string;
        static server_port: number;
        /** 平台资源配置地址 */
        static platform_res_config_url: string;
        /** 平台资源配加载前缀 */
        static platform_res_url: string;
        /** 微信appid */
        static wxAppId: string;
        /** universalLink */
        static universalLink: string;
        /** 微信角色信息请求 */
        static wxApiUrl: string;
        /** 下载地址 */
        static downUrl: string;
        /** 资源路径*/
        static res_url: string;
        /** 资源配置文件*/
        static res_config: string;
        /** 游戏主类*/
        static clientMainClass: string;
        /** 版本号*/
        static resVer: string;
        /**游戏id */
        static gameId: number;
        /**是否需要绑定手机才能报名 */ static applyisneedPhone: number;
    }
}
declare module kelvin.texas {
    class Events {
        /** 重连事件，需要刷新界面 */
        static reloadLoginData: string;
        /** 刷新界面显示金币 */
        static refreshShowGold: string;
        /** 金币额度发生变化 */
        static goldChange: string;
        /** 生成锦标赛界面*/
        static createJBSView: string;
        /** 生成比赛详情界面 */
        static createBSXQView: string;
        /** 生成盲注结构表界面 */
        static createMZJGBView: string;
        /**生成个人信息界面 */
        static createPersonalView: string;
        /** 去游戏界面 */
        static gotoGameView: string;
        /** 返回赛事界面 */
        static gotoMatchView: string;
        /** 去奖励页卡 */
        static gotoJLPage: string;
        /** 退出游戏事件 */
        static backGame: string;
        /**游戏去到锦标赛界面 */
        static goToJBSMatch: string;
        /** 游戏 去到商城*/
        static goToShop: string;
        /** 横向容器滑动时不响应点击事件 */
        static controlHContanier: string;
    }
}
declare module kelvin.texas {
    interface SngInfoIF {
        id?: string;
        type?: string;
        matchtype?: string;
        signed?: number;
        titie?: string;
        signmoney?: number;
        havepeople?: number;
        allpeople?: number;
        explain?: string;
        state?: number;
        serverstate?: number;
        buy_count?: number;
        init_game_score?: number;
        apply_date?: number;
        apply_time?: number;
        apply_date_end?: number;
        apply_time_end?: number;
        start_date?: number;
        start_time?: number;
        apply_delay_time?: number;
        mz_level?: number;
        mz_interval?: number;
        reward?: number;
        min_reward?: number;
        cur_buy_count?: number;
        apply_score?: number;
        apply_max_people?: number;
        apply_max_mz_level?: number;
        start_date_str?: string;
        start_time_str?: string;
        table_people?: number;
        service_gold?: number;
        service_score?: number;
        break_time_long?: number;
        break_interval?: number;
        match_start_time?: number;
        poker_score_rate?: number;
        reward_poker_score?: number;
        over_people?: number;
        inMoneyCircle?: number;
        masterRule?: any;
        master_points_id?: number;
        satellite?: number;
        player_buy_count?: number;
        reBuyCount?: number;
        apply_time_str?: string;
        ticket_cfgId?: string;
    }
    interface MatchMaxInfoIF extends SngInfoIF {
        mzTable?: Object;
        roles?: any[];
        pokerScores?: any[];
        gameScores?: any[];
        rooms?: any[];
        moneyCircle?: Object;
        overList?: Object;
        roomInfo?: PZInfoIF[];
        isOver?: boolean;
        hasTicket?: boolean;
    }
    interface JLRatioIF {
        ratio: number;
        reward: number;
        level: string;
    }
    interface WJInfoIF {
        name: string;
        score: number;
        money: number;
        heart: number;
        uid?: string;
        rank?: number;
        matchtype?: string;
        matchId: string;
        serverstate?: number;
    }
    interface PZInfoIF {
        tableid: string;
        usersnum: number;
        max: number;
        min: number;
        match_id?: string;
        players?: Object;
        showId?: number;
    }
    interface MZJGBInfoIF {
        level: number;
        blind: string;
        bet: number;
    }
    interface ActiveInfoIF {
        imgurl?: string;
        title?: string;
        content?: string;
        name?: string;
        time?: string;
        imglengthArr?: string[];
    }
    interface ShopInfoIF {
        gold: number;
        rmb: number;
    }
    interface NewsInfoIF {
        title: string;
        content: string;
        type: string;
        state?: number;
        time?: string;
    }
    interface RankDeInfoIF {
        title?: string;
        time?: string;
        matchTime?: number;
        matchJoinNum?: string;
        matchJackpot?: string;
        matchWin?: string;
        matchLive?: string;
        allPeople?: number;
        list?: RankDeInfoLineIF[];
        buy?: number;
        type?: string;
        score?: number;
        rank?: number;
        matchid?: number;
        zhanjiId?: string;
        reward?: number;
        reward_type?: number;
        matchtype?: string;
    }
    interface RankDeInfoLineIF {
        uid: string;
        rank: number;
        headurl: string;
        name: string;
        result: string;
        reward: number;
        matchtype?: string;
        reward_type?: number;
    }
    interface GameRankInfoIF {
        title?: string;
        starttime?: number;
        frontscore?: number;
        allscore?: number;
        avescore?: number;
        myrank?: number;
        rebuy: number;
        nowpeople: number;
        joinpeople: number;
        realpeople: number;
        over_people?: number;
        cur_buy_count?: number;
        list: GameRankListIF[];
    }
    interface GameRankListIF {
        uid: string;
        rank: number;
        name: string;
        rebuy: number;
        tableid: string;
        score: number;
        showId?: number;
    }
    interface GameCardLineIF {
        name: string;
        headurl: string;
        score: number;
        isdis: number;
        mycard: string[];
        commoncard: string[];
        uid?: string;
    }
    interface MasterRankIF {
        name: string;
        uid: string;
        time: string;
        score: number;
        rank: number;
    }
    interface PackInfoIF {
        startTime: string;
        name: string;
        imgurl?: string;
        type: string;
        state: number;
        endTime: string;
        desc: string;
    }
}
declare module kelvin.texas {
    class AccountData {
        static getSessionToken(): string;
        static putSessionToken(token: string): void;
        static getUser(): User;
        static putUser(user: User): void;
        static loginInfo_wx: Object;
        static wxInfoTime: number;
        static loginInfo: Object;
        static addLoginInfo(account: string, password: string): void;
        static deleteLoginInfo(account: string): void;
        static loginInfo_visitor: Object;
        static getLastAccount(): any;
        static getLastPhoneAccount(): any;
        static isNeedAutomaticLogin: string;
        static loginData: any;
    }
}
declare module kelvin.texas {
    class CacheData {
        private static _ramDatas;
        static getRAMData(key: string): any;
        static saveRAMData(key: string, data: any): void;
        static removeRAMData(key: string): void;
        static clearRAMData(): void;
    }
}
declare module kelvin.texas {
    class MatchConfig {
        /** 比赛id */
        id: any;
        /** 比赛种类(1-普通比赛 2-wcaa) */
        type1: number;
        /** 比赛类型(1-sng 2-mtt) */
        type: any;
        /** 名字 */
        name: any;
        /** 门票所需金币 */
        apply_gold: any;
        /** 门票所需积分 */
        apply_score: any;
        /** 报名开始日期 */
        apply_date: any;
        /** 报名结束日期 */
        apply_date_end: any;
        /** 报名时间 */
        apply_time: any;
        /** 报名结束时间 */
        apply_time_end: any;
        /** 延迟报名时间（秒） */
        apply_delay_time: any;
        /** 报名截止盲注等级 */
        apply_max_mz_level: any;
        /** 最大报名人数 */
        apply_max_people: any;
        /** 盲注表 */
        mz_table_id: any;
        /** 涨盲时间 */
        mz_interval: any;
        /** 可买入次数 */
        buy_count: any;
        /** 单个玩家可买入次数 */
        player_buy_count: number;
        /** 保底奖励 */
        min_reward: any;
        /** 金币转换比例（入池分数） */
        reward_val: any;
        /** 每一桌的最大人数 */
        table_people: number;
        /** 初始计分牌 */
        init_game_score: any;
        /** 牌力分占比 */
        poker_score_rate: number;
        /** 报名人数不满足 作废 */
        stop_people: any;
        /** 在线人数不满足 作废 */
        stop_online_people: any;
        /** 休息间隔 -1 表示不休息*/
        break_interval: number;
        /** 休息时长 */
        break_time_long: number;
        /** 比赛开始日期 */
        start_date: any;
        /** 比赛开始时间 */
        start_time: any;
        /** 场馆系数 */
        stage_rate: number;
        /** 服务费-金币 */
        service_gold: number;
        /** 服务费-积分 */
        service_score: number;
        /** 思考时间 */
        think_time: number;
        /** 奖励类型 1-积分 2-金币 */
        reward_type: number;
        /** 门票配置 id */
        ticket_cfgId: number;
        /** 当前报名人数 */
        people: number;
        /** 当前奖池 */
        reward: number;
        /** 已经分发的牌力分 */
        reward_poker_score: number;
        /** 当前买入次数 */
        cur_buy_count: number;
        /** 开始时间戳 */
        match_start_time: number;
        /** uuid */
        uuid: any;
        /** 当前盲注等级 */
        mz_level: number;
        /** 比赛状态(0报名中，1进行中，2休息中) */
        state: number;
        /** 休息次数 */
        break_count: number;
        /** 上一次休息结束的时间 */
        last_break_end_time: number;
        /** 等待休息的房间数量 */
        break_room_count: number;
        /** 休息的开始时间 */
        break_start_time: number;
        /** 进入休息状态的时间戳 */
        break_state_time: number;
        /** 总共休息的时常 */
        break_total_time: number;
        /**当前被淘汰的人 */
        over_people: number;
        /** 桌号 */
        cur_table_num: number;
        /** 钱圈 */ inMoneyCircle: number;
        /** 大师分 id */
        master_points_id: number;
        /**标题id */
        title_id: number;
        /** 循环赛 1是 0否 */
        satellite: number;
    }
}
/**
 *
 *
 *
 *
 *
 * 比赛数据缓存
 */
declare module kelvin.texas {
    class MatchData {
        static getNowMatchId(): number;
        static putNowMatchId(id: number): void;
        static getUserPropInfo(): any;
        static putUserPropInfo(data: any): any;
    }
}
declare module kelvin.texas {
    class Mzconfig {
        /** 配置表id */
        id: any;
        /** 盲注级别 */
        level: any;
        /** 小盲 */
        xm: any;
        /** 大盲 */
        dm: any;
        /** 前注 */
        qz: any;
    }
}
declare module kelvin.texas {
    class PhoneData {
        static phoneNumber: any;
    }
}
declare module kelvin.texas {
    class Role {
        /** 角色uid */
        uid: any;
        /** 注册时间*/
        gettime: any;
        /** 角色名 */
        name: any;
        /** 头像地址 */
        head: any;
        /** 性别 */
        sex: number;
        /** ip */
        ip: any;
        /** 推荐人id */
        recommend: any;
        /** 地址 */
        addr: any;
        /** 金币数量 */
        gold: number;
        /** 积分 */
        scores: number;
    }
}
declare module kelvin.texas {
    class RoleData {
        static getRole(): Role;
        static putRole(role: Role): void;
        static getRoleName(uid: string): string;
        static putRoleName(uid: string, name: string): void;
        static putRolePrizeInfo(data: any): void;
        static getRolePrizeInfo(): any;
        /**
         * 更新玩家金币,会派发更新界面显示金币的事件
         */
        static updateRoleGold(gold: number): void;
        /**
         * 保存玩家在线时长
         */
        static updateOnLineTime(time: number): void;
        static getOnlineTime(): number;
    }
}
declare module kelvin.texas {
    class Room {
        /** 房间id */
        id: any;
        /** 创建时间 */
        ct: any;
        /** 房间成员列表 */
        players: any;
        /** 最大玩家数量 */
        max_player: any;
        /** 比赛id */
        $match_id: any;
        /** 庄家位 */
        zj: any;
        /** 最大计分牌 */
        maxScore: number;
        /** 最小计分牌 */
        minScore: number;
        /** 是否已经准备开始游戏 */
        ready: boolean;
        /** 桌号 */
        table_num: number;
    }
}
declare module kelvin.texas {
    class RoomData {
        static getCurrentRoom(): Room;
        static putCurrentRoom(room: Room): void;
        /**
         * 保存当前房间中的玩家数据
         */
        static saveRoles(roles: any): void;
        /**
         * 获取当前房间中的所有角色
         */
        static getRoles(): any;
        /**
         * 保存一个玩家信息到房间角色列表
         */
        static saveRole(role: Role): void;
        /**
         * 获取当前房间的某个角色
         */
        static getRole(uid: string): Role;
        /**
         * 记录休闲区和竞技区和相应游戏的选择   数组, 0位是大区,1位是游戏
         */
        static recordChooseZoneAndGame: any[];
    }
}
/**
 *
 *
 * 记录一些时间点
 */
declare module kelvin.texas {
    class TimeData {
        static noticeTime: number;
    }
}
declare module kelvin.texas {
    class User {
        /**
         * 用户账号
         * */
        $account: string;
        /**
     * 用户密码
     * */
        pwd: string;
        /**
         * 用户uid
         * */
        uid: string;
        /**
         * 注册时间
         * */
        gettime: number | string;
        /**
         * 联合ID
         * @var
         */
        union_id: string;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * 声音的数据缓存
 */
declare module kelvin.texas {
    class VoiceData {
        static musicNum: number;
        static soundNum: number;
    }
}
declare module kelvin.texas {
    /**
     * 游戏主体
     */
    class ExtGame extends egret.DisplayObjectContainer {
        constructor();
        /** 初始化房间 */
        onInit(): void;
        /** 根据录像来初始化游戏 */
        onInitByMovie(movie: any): void;
        /** 有玩家加入房间 */
        onJoinRoom(data: any): void;
        /** 玩家返回游戏 */
        onReturnGame(data: any): void;
        /** 有玩家离开房间 */
        onLeaveRoom(data: any): void;
        /** 玩家离线 */
        onLeaveGame(data: any): void;
        /** 解散房间 */
        onDisbandRoom(data: any): void;
        /** 收到游戏消息 */
        onGameMessage(data: any): void;
        /** 收到余额不足，被迫离开房间的消息 */
        onLeaveRoomByJoinMoneyError(data: any): void;
        /** 返回游戏自定义背景 */
        getBackGround(): ExtGameBackground;
        /** 当界面大小变化 触发重新布局的操作 */
        layout(): void;
        /**获取游戏版本号 */
        getGameVersion(): string;
        /** 销毁游戏 */
        dispose(): void;
    }
}
declare module kelvin.texas {
    class ExtGameBackground extends BasePanel {
        constructor();
        getStageWidth(): number;
        getStageHeight(): number;
    }
}
declare module kelvin.texas {
    class ExtGameHelper {
        static homePanel: BasePanel;
        static extGamePanel: GamePanel;
        static exitBackPanelClass: any;
        private static _ramDatas;
        static getRAMData(key: string): any;
        static saveRAMData(key: string, data: any): void;
        static removeRAMData(key: string): void;
        static clearRAMData(): void;
        /**
         * 初始化
         */
        static init(): void;
        /**
         * 是否需要退出界面
         */
        static isneedPop: boolean;
        /**
         * 退出游戏界面
         */
        static exitExtGamePanel(): void;
        /**
         * 进入游戏界面
         */
        static joinExtGamePanel(): void;
        /**
         * 离开房间
         */
        static leaveRoom(): void;
        /**
         * 解散房间
         */
        static disbandRoom(): void;
        /**
         * 离开房间确认按钮之后调用
         */
        private static _leaveRoom();
        /**
         * 向游戏发送数据
         */
        static sendGameMessage(data: any, finishOnClient?: boolean): void;
        /**
         * 弹窗弹窗
         * @param ui 需要弹出的容器
         */
        static popAnyView(ui: egret.DisplayObjectContainer): void;
        /**
         * 得到游戏的缩放倍数
         *
         */
        static getGameScalex(): number;
        /**
         * 显示我的比赛按钮
         */
        static matchBtn: GameMatchBtn;
        static showMatchBtn(x: number, y: number, matchid?: number, callback?: Function, error?: Function): GameMatchBtn;
        /**
     * 隐藏我的比赛按钮
     */
        static hideMatchBtn(): void;
        /**
     *
     * 调用我的赛事弹窗
     *
     * @param  callback    点击返回场次回调的函数，数据会传进去
     *
     */
        static popMyMatchView(matchid: string, callback?: Function, error?: Function): void;
        /**
     *
     * 调用实时战绩弹窗
     * @param  roomid   当前房间的id
     * @param  callback    点击返回场次回调的函数，数据会传进去
     * @param  cardData   牌局回顾的数据
     */
        static popGameRankView(matchid: string, roomid: number, cardData: any, watchPeople: number): void;
        /**
         * 调用赛事详情弹窗
         * @param matchid 比赛id
         * @param reward  当前奖池
         * @param min_reward  保底奖励
         * @param mz_level  当前盲注等级
         * @param iswatch  0是操作玩家   1是观战玩家
         * @param  apply_max_mz_level    报名截止盲注等级
         */
        static popGameSsxqView(matchid: string, reward: number, min_reward: number, mz_level: number, iswatch: number, apply_max_mz_level: number): void;
        /**
         * 弹窗出指定面板
         * @param view 要弹出的面板
         * @param animatypes //1 从左边出来     2 从右边出来   3从上面出来
         * @param animatypee  //1往左边回去   2往右边回去    3往上面回去
         */
        static popAppointPanel(view: BasePanel, animatypes: number, animatypee: number, alpha?: number): void;
        /**
         * 移除所有弹窗
         *
         *
         */
        static popupPanelArr: BasePanel[];
        static removePopupPanle(): void;
        /**
         *
         * 隐藏房间匹配弹窗
         */
        static hideRoomWaitUI(): void;
        /**
         * 弹出填写获奖信息的弹窗
         * @param  callback弹唱关闭的时候回调
         */
        static popGetPrize(callback?: Function): void;
        /**
         * 判断是否填写过
         * @return true是填过  false 是没填过
         */
        static isSetPrizeInfo(): boolean;
        /**
         *
         * 是否可以报名
         * @param starttime  比赛开始时间  ps:09:00:00  apply_time
         * @param endtime  比赛结束时间 ps:18:00:00   apply_time_end
         * @param dealytime 延迟时间  单位是秒  3600    apply_delay_time
         * @param signmoney  报名费用  apply_gold
         * @param  nowmz 当前的盲注等级  mz_level
         * @param  maxmz  报名截止最大的盲注等级   apply_max_mz_level
         * @param apply_score 报名所需积分  apply_score
         * @param maxapplypeople 最大报名人数  apply_max_people
         * @param nowapplypeople  当前报名人数  people
         * @return  number   0是可以报名  1 金币不够报名   2积分不够报名  3当前盲注等级过大，不能报名 4 当前尚未到报名时间,不能报名  5 比赛时间已过，不能报名   6 报名人数已满   7奖励圈人数已定
         */
        static isCansignup(data: MatchConfig): number;
        /**
         * 弹窗报名费不足的提示
         * @param type  1是金币不足，2是积分不足
         */
        static popApplyFailMsg(type: number): void;
        /**
         *
         * 重新报名
         * rebuy
         * @param id 比赛id
         * @param  error  错误回调函数
         */
        static rebuy(id: string, error: Function): void;
        /**
         * 是否能用门票报名
         * @param cfgid ticket_cfgId
         * @return string  "xx"可以  ""是不可以
         */
        static isUsePropApply(cfgid: any, callback?: Function): string;
    }
}
declare module kelvin.texas {
    class AppWx extends NativeBase {
        static clazz: string;
        static init(): void;
        static onWxResp(objs: any): void;
        static registerApp(appId: string): void;
        static login(): void;
        static shareWxImage(imageObject: egret.DisplayObject, scene?: string): void;
    }
}
declare module lzm {
    class SwipeGestures extends Gestures {
        static UP: String;
        static DOWN: String;
        static LEFT: String;
        static RIGHT: String;
        private static DISTIME;
        private static DIS;
        private _downPoint;
        private _downTime;
        constructor(target: egret.DisplayObject, callBack?: Function);
        is_over: boolean;
        checkGestures(touch: Touch): void;
    }
}
declare module kelvin.texas {
    class NativeTools {
        static clazz: string;
        static copyString: string;
        static init(): void;
        static openUrl(url: string): void;
        static copy(content: string): void;
        static chageOriention(landScape: string): void;
        static hideLoading(): void;
        static openWeixin(): void;
        static openZhifubao(): void;
        static getCopy(): void;
        private static onCopy(data);
        static appUpdate(): void;
        static onAppUpdate(data: string): void;
    }
}
declare module kelvin.texas {
    class OpenAdSdk {
        /**
         * 展示激励广告
         */
        static showSplashAd(): void;
        /**
         * 展示激励广告
         */
        static showRewardVideoAd(uid: string, suc: Function, error: Function, callBackObj: any): void;
        /**
         * 激励广告
         */
        private static RewardVideoAd(callBack, callObj, json);
        /**
         * 开屏广告
         */
        private static SplashAd(callBack, callObj, json);
        /**
         * 全屏广告
         */
        private static FullScreenVideoAd(callBack, callObj, json);
        /**
         * banner广告
         */
        private static BannerExpressAd(callBack, callObj, json);
        /**
         * 插图广告
         */
        private static InteractionAd(callBack, callObj, json);
        private static addCallBack(type, callBack, callObj, json);
    }
}
declare module kelvin.texas {
    class Openinstall {
        static clazz: string;
        static init(): void;
        static timeoutId: number;
        static getRegisterParams(): void;
        static onOpeninstallParams(objs: any): void;
    }
}
declare module lzm {
    class Touch {
        type: string;
        localPoint: egret.Point;
        stagePoint: egret.Point;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 分页面板
 */
declare module kelvin.texas {
    interface PageTitleIF {
        core: egret.TextField | egret.Bitmap;
        key: string;
        isscale: boolean;
        offsetX: number;
        offsetY: number;
        chooseFt?: Function;
        unchooseFt?: Function;
        callBack: Function;
        length: number;
    }
    class PagePanel extends egret.DisplayObjectContainer {
        constructor(titleH: number, singleH: number);
        private titleH;
        private singleH;
        /** 标题的容器 */
        private titleContainer;
        /** 横向的滑动容器 */
        scrollViewH: ScrollView;
        /**  横向的容器*/
        containerH: egret.Sprite;
        touSpRect: egret.Sprite;
        slideJudge: lzm.SwipeGestures;
        init(): void;
        addToStage(): void;
        private beginTouch(e);
        movePanel(e: egret.TouchEvent): void;
        private startPoint;
        private startTime;
        private startTouchX;
        resetSlide(e: egret.TouchEvent): void;
        private direction;
        isJuge: boolean;
        slideCallback(data: any): void;
        private pageTitleData;
        private scrollViewVs;
        addPage(core: egret.TextField | egret.Bitmap, sc: BasePanel, key: string, callBack: Function, isscale?: boolean, chooseFt?: Function, unchooseFt?: Function, offsetX?: number, offsetY?: number): void;
        getContainerByKey(key: string): BasePanel;
        private titleArr;
        private chooseLine;
        updateTitle(): void;
        nowChoose: string;
        mouseClick(e: egret.TouchEvent): void;
        mouseDown(e: egret.TouchEvent): void;
        mouseUp(e: egret.TouchEvent): void;
        dispose(): void;
    }
}
declare module kelvin.texas {
    /**
     * 界面缓动效果累
     */
    class PanelTween {
        /**
         * 基础面板，所有的pushPanel都跟他在一个容器，并且所有pushPanel销毁之后会显示改对象
         */
        static rootPanel: egret.DisplayObject;
        /**
         * 推入的界面列表
         */
        static pushPanelList: egret.DisplayObject[];
        /**
         * 替换当前界面
         */
        static switchPanel(currentObj: egret.DisplayObject, newObj: egret.DisplayObject): void;
        /** 推入一个界面 */
        static pushPanel(panel: egret.DisplayObject): void;
        /**
         * 推出一个界面
         */
        static popPanel(): void;
        /**
         * 移除所有界面
         */
        static clearAllPanel(): void;
        static callBackTweenOver(obj: egret.DisplayObject): void;
    }
}
declare module kelvin.texas {
    class PushPanel extends BasePanel {
        constructor();
        on_closeBtn(e: egret.Event): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * 活动条
 */
declare module kelvin.texas {
    class ActiveLineUI extends BasePanel {
        constructor(data: ActiveInfoIF);
        private data;
        private timeTxt;
        private titleTxt;
        private contentTxt;
        private nameTxt;
        private icon;
        private downLine;
        private activeimg;
        contentH: number;
        private createGameScene();
        private createImg();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 * 活动主界面
 */
declare module kelvin.texas {
    class ActiveView extends BasePanel {
        constructor();
        private bg;
        private createGameScene();
        private infoArr;
        private getInfo(data);
        uiArr: egret.Bitmap[];
        private createUI();
        private touchImg(e);
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情的大厅UI
 */
declare module kelvin.texas {
    class BsxqDtUI extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private csjfpTxt;
        private ybmTxt;
        private mrcssxTxt;
        private bmfTxt;
        private titleTxt;
        private ssTxt1;
        private jcphTxt;
        private plTxt;
        private mzjgbTxt;
        private nowLevelTxt;
        private nextLevelTxt;
        private zmsjTxt;
        private jfpTxt;
        private line5Txt;
        private icon1;
        private icon2;
        private baomingTxt;
        private gthImg3;
        private createGameScene();
        updateUI(): void;
        showSSJF(): void;
        hideSSJF(): void;
        private showMZB();
        private showJLPH();
        private showPL();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情的奖励UI
 */
declare module kelvin.texas {
    class BsxqJlUI extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private listbg;
        private alljcTxt;
        private jlqTxt;
        private listContainer;
        private listimg;
        private container;
        private createGameScene();
        updateUI(): void;
        private infoArr;
        private getInfo();
        minSpArr: egret.Sprite[];
        createListUI(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情的牌桌UI
 */
declare module kelvin.texas {
    class BsxqPzUI extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private listbg;
        private alljcTxt;
        private jlqTxt;
        private listContainer;
        private createGameScene();
        private iscanTouch;
        private controlHContanier(data);
        updateUI(): void;
        private infoArr;
        private getInfoNum;
        private getInfo(data);
        minSpArr: egret.Sprite[];
        createListUI(): void;
        refreshCall(): void;
        private gotoGame(e);
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情  主界面
 */
declare module kelvin.texas {
    class BsxqView extends BasePanel {
        constructor(data: SngInfoIF);
        private data;
        private bg;
        backBtn: starlingswf.SwfButton;
        bottomSp: starlingswf.SwfSprite;
        timeTxt: egret.TextField;
        stopSignBtn: starlingswf.SwfButton;
        signBtn: starlingswf.SwfButton;
        outBtn: starlingswf.SwfButton;
        goBackGameBtn: starlingswf.SwfButton;
        ybmBtn: starlingswf.SwfButton;
        wdbmsjBtn: starlingswf.SwfButton;
        delaySignBtn: starlingswf.SwfButton;
        dtTxt: egret.TextField;
        jlTxt: egret.TextField;
        wjTxt: egret.TextField;
        pzTxt: egret.TextField;
        dtView: BsxqDtUI;
        jlView: BsxqJlUI;
        wjView: BsxqWjUI;
        pzView: BsxqPzUI;
        view: egret.DisplayObjectContainer;
        private timer;
        private pageView;
        private createGameScene();
        private acceptMatch(data);
        private delayTimeTxt;
        private delayTimeRun();
        private timeId1;
        private startintervalUpdate();
        private intervalGetInfo(data);
        private updateUI();
        private gotoJLPage();
        onInterfaceTweenOver(): void;
        openFailBack(): void;
        gameend(): void;
        private getSpData(data);
        spData: MatchMaxInfoIF;
        private dtShow();
        private dtHide();
        private jlShow();
        private jlHide();
        private wjShow();
        private wjHide();
        private pzShow();
        private pzHide();
        initState(): void;
        private updateState();
        private ispop;
        private timerun();
        showSignTime(): void;
        private dateUtils;
        showGameTime(): void;
        on_signBtn(e: egret.TouchEvent): void;
        signSuccess(data: any): void;
        on_delaySignBtn(e: egret.TouchEvent): void;
        on_ybmBtn(e: egret.TouchEvent): void;
        cancelApplySuccess(data: any): void;
        startJoinGame(): void;
        on_goBackGameBtn(e: egret.TouchEvent): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class BsxqWjLine extends eui.ItemRenderer {
        constructor();
        data: WJInfoIF;
        private nameTxt;
        private ratioTxt;
        private rewardTxt;
        private line;
        private img;
        private levelTxt;
        private heartimg;
        private heartTxt;
        private numdisy;
        private createGameScene();
        private floatUid();
        private getroomid(data);
        private getError(data);
        private iscanTouch;
        private controlHContanier(data);
        dataChanged(): void;
        setData(data: WJInfoIF): void;
        private showUI();
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情的玩家UI
 */
declare module kelvin.texas {
    class BsxqWjUI extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private listbg;
        private csrsTxt;
        private csrcTxt;
        private pljfTxt;
        listContainer: ScrollView;
        private inputTxt;
        private searchBtn;
        private input1;
        clearBtn: starlingswf.SwfButton;
        private createGameScene();
        private toupl(e);
        private singleUI;
        private crateSingeInfo();
        private singleGetSuccess(data);
        private gthImg;
        updateUI(): void;
        refreshCall(): void;
        private infoArr;
        private getInfoNum;
        private getInfo(data);
        minSpArr: egret.Sprite[];
        private list;
        private collection;
        createListUI(infoArr: WJInfoIF[]): void;
        on_clearBtn(e: egret.TouchEvent): void;
        on_searchBtn(e: egret.TouchEvent): void;
        singleGetError(data: any): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 牌力积分介绍
 */
declare module kelvin.texas {
    class CardScoreView extends BasePanel {
        constructor();
        private bg;
        private title;
        private createGameScene();
        private createImgs();
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 盲注结构表
 */
declare module kelvin.texas {
    class MzjgbView extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private bg;
        private listbg;
        private listContainer;
        private listimg;
        private container;
        private createGameScene();
        private infoArr;
        private getInfo();
        minSpArr: egret.Sprite[];
        createListUI(): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class GamePanel extends BasePanel {
        game: ExtGame;
        constructor();
        onGameMessage(data: any): void;
        layout(): void;
        scaleGame(): void;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛详情
 */
declare module kelvin.texas {
    class GameBsqxView extends BasePanel {
        constructor(matchid: string, reward: number, min_reward: number, mz_level: number, iswatch: number, apply_max_mz_level: number);
        private iswatch;
        private matchid;
        private reward;
        private min_reward;
        private mz_level;
        private apply_max_mz_level;
        private chooseSsxqBtn;
        private choosePzsBtn;
        private unchooseSsxq;
        private unchoosePzs;
        private view;
        private bgSp;
        private bg;
        private lineImg;
        private createGameScene();
        private spData;
        private bsxqUI;
        private pzsUI;
        private getSpData(data);
        show(): void;
        hide(): void;
        on_chooseSsxqBtn(e: egret.TouchEvent): void;
        on_choosePzsBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 游戏赛事详情
 */
declare module kelvin.texas {
    class GameBsxqUI extends BasePanel {
        constructor(data: MatchMaxInfoIF);
        private data;
        private jcTxt;
        private jlqTxt;
        private createGameScene();
        private mzinfoArr;
        private getMzInfo();
        private mzlistContainer;
        mzminSpArr: egret.Sprite[];
        private createMzUI();
        private jlinfoArr;
        private getJlInfo();
        private jllistContainer;
        jsminSpArr: egret.Sprite[];
        private createJlUI();
        updateUI(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 游戏牌桌数
 */
declare module kelvin.texas {
    class GamePzsUI extends BasePanel {
        constructor(data: MatchMaxInfoIF, iswatch: number);
        data: MatchMaxInfoIF;
        private iswatch;
        private createGameScene();
        private infoArr;
        minSpArr: egret.Sprite[];
        private getInfo(data);
        private listContainer;
        private createUI();
        private gotoGame(e);
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 我的比赛按钮入口
 */
declare module kelvin.texas {
    class GameMatchBtn extends BasePanel {
        constructor(matchid: number, callback: Function, error: Function);
        private matchid;
        private callback;
        private error;
        private btn;
        private createGameScene();
        private touchBtn(e);
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 我的赛事的每一行
 */
declare module kelvin.texas {
    class GameMatchLine extends BasePanel {
        constructor(data: SngInfoIF, index: number, stageview: GameMatchView, matchid: string, callback: Function, error: Function, type?: string);
        private type;
        private matchid;
        private callback;
        private error;
        private stageview;
        data: SngInfoIF;
        private index;
        mtticon: egret.Bitmap;
        sngicon: egret.Bitmap;
        lightBg: egret.Bitmap;
        darkBg: egret.Bitmap;
        stopImg: starlingswf.SwfButton;
        sginImg: starlingswf.SwfButton;
        private delayImg;
        private gameImg;
        titleTxt: egret.TextField;
        sginmoneyTxt: egret.TextField;
        peopleNumTxt: egret.TextField;
        promptTxt: egret.TextField;
        explainTxt: egret.TextField;
        delayTxt: egret.TextField;
        private goToBtn;
        private initUI();
        private createGameScene();
        private touch();
        private goToBtnTouch(e);
        private updateState();
        private updateUI();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 我的赛事面板
 */
declare module kelvin.texas {
    class GameMatchView extends BasePanel {
        constructor(matchid: string, callback: Function, error: Function, type?: string);
        private type;
        static gamematchView: GameMatchView;
        private matchid;
        private callBack;
        private error;
        private view;
        private bgSp;
        private bg;
        closeBtn: starlingswf.SwfButton;
        private timer;
        private createGameScene();
        private dateUtils;
        private delayTimeRun();
        private infoArr;
        private getInfo(data);
        private uiArr;
        private updataUI();
        show(): void;
        hide(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 牌局回顾的每一行
 */
declare module kelvin.texas {
    class GameCardLineUI extends BasePanel {
        constructor(data: GameCardLineIF, selfDis: number, havenum: number);
        private data;
        private discardTxt;
        private nameTxt;
        private scoreTxt;
        private cardType;
        private createGameScene();
        private selfDis;
        private havenum;
        private createMycard();
        private createCommonCard();
        private headsp;
        private createHead();
        mainAssetName(): string;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class GameCardUI extends BasePanel {
        constructor(cardData: any);
        private cardData;
        private pageTxt;
        private leftBtn;
        private rightBtn;
        private maxLeftBtn;
        private maxRightBtn;
        private createGameScene();
        private dataArr;
        private cutDateArr;
        private selfDis;
        private haveNum;
        private linenum;
        private getInfo();
        private uiArr;
        private pageindex;
        private updateUI();
        on_leftBtn(e: egret.TouchEvent): void;
        on_rightBtn(e: egret.TouchEvent): void;
        on_maxLeftBtn(e: egret.TouchEvent): void;
        on_maxRightBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
declare module kelvin.texas {
    class GameRankListLine extends eui.ItemRenderer {
        constructor();
        private view;
        private nameTxt;
        private rankingTxt;
        private rankimg3Img;
        private rankimg2Img;
        private rankimg1Img;
        private rebuyImg;
        private tableTxt;
        private scoreTxt;
        private rebuyTxt;
        data: GameRankListIF;
        private createGameScene();
        dataChanged(): void;
        private showUI();
        initState(): void;
        assetSwf(): starlingswf.Swf;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 实时战绩的ui
 */
declare module kelvin.texas {
    class GameRankUI extends BasePanel {
        constructor(matchid: string, roomid: number, watchPeople: number);
        private matchid;
        private watchPeople;
        private roomid;
        private titleTxt;
        private timeTxt;
        private frontScoreTxt;
        private allScoreTxt;
        private averageScoreTxt;
        private myrankTxt;
        private rebuyTxt;
        private joinMatchTxt;
        private joinMatchNumTxt;
        private watchPeopleTxt;
        private lookupBtn;
        private lookup2Btn;
        private timer;
        private createGameScene();
        private list;
        private createList();
        private infoArr;
        private getRoomsInfo(data);
        private data100;
        private listnum;
        private getList100(data);
        showList100(): void;
        private dataRoom;
        private roomlistArr;
        private getListRoom(data);
        showListRoom(): void;
        private watchContainer;
        private watchBg;
        private headSpArr;
        private createWatchUI();
        private dateUtil;
        private timeRun();
        private data;
        private getInfo(data);
        lookupstate: boolean;
        on_lookupBtn(): void;
        on_lookup2Btn(): void;
        private showUI();
        mainAssetName(): string;
        dispose(): void;
    }
}
declare class ThemeAdapter implements eui.IThemeAdapter {
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    getTheme(url: string, onSuccess: Function, onError: Function, thisObject: any): void;
}
declare var generateEUI: {
    paths: string[];
    skins: any;
};
declare var generateEUI2: {
    paths: string[];
    skins: any;
};
declare var generateJSON: {
    paths: string[];
    skins: any;
};
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 游戏load
 *
 */
declare module kelvin.texas {
    class LoadGameUI extends BasePanel {
        constructor();
        private txt;
        private img1;
        private img2;
        private img3;
        private img4;
        private imgArr;
        createGameScene(): void;
        private timeid1;
        show(num?: number): void;
        private index;
        private runAnima();
        setProgress(num: number): void;
        hide(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 网络load
 *
 */
declare module kelvin.texas {
    class NetLoadUI extends BasePanel {
        constructor();
        private txt;
        private loadimg;
        private imgArr;
        createGameScene(): void;
        private timeid1;
        show(): void;
        hide(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 等待分配房间的
 */
declare module kelvin.texas {
    class WaitRoomUI extends BasePanel {
        constructor(match_id: string, roomid?: number);
        static waitRoomUI: WaitRoomUI;
        private roomid;
        private match_id;
        private promptTxt;
        sendnum: number;
        private time1;
        private mateAnima;
        private changeAnima;
        bg: egret.Sprite;
        private createGameScene();
        showPointerAnima(): void;
        hidePointerAnima(): void;
        loadGame(): void;
        private loadSuccess(data);
        delayJoin(): void;
        joinGame(): void;
        joinback(data: any): void;
        joinSuccess(): void;
        hide(): void;
        dispose(): void;
        mainAssetName(): string;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 登录输入框
 */
declare module kelvin.texas {
    class LoginInputPop extends BasePanel {
        constructor(mainview: egret.DisplayObjectContainer, loginscene: LoginView);
        mainView: egret.DisplayObjectContainer;
        loginScene: LoginView;
        accountTxt: egret.TextField;
        passwordTxt: egret.TextField;
        private txt1;
        private txt2;
        private createGameScene();
        private focusIn(e);
        private focusOut(e);
        on_againPasswordBtn(e: egret.TouchEvent): void;
        on_loginBtn(): void;
        private testLogin();
        dispose(): void;
        mainAssetName(): string;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 登录主界面
 */
declare module kelvin.texas {
    class LoginView extends BasePanel {
        constructor();
        private bg;
        private wxBtn;
        private loginBtn;
        createGameScene(): void;
        automaticLogin(): void;
        wxAccount: string;
        wxInfo: Object;
        on_wxBtn(e: egret.TouchEvent): void;
        testLogin(): void;
        wxLogin(): void;
        private registersuccess_wx(data);
        wxresgistered(data: any): void;
        commonlogin(): void;
        on_loginBtn(e: egret.TouchEvent): void;
        layout(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 登录主界面弹窗
 */
declare module kelvin.texas {
    class LoginViewPop extends BasePanel {
        constructor(mainview: egret.DisplayObjectContainer, loginscene: LoginView);
        mainView: egret.DisplayObjectContainer;
        loginScene: LoginView;
        private accountText;
        private view;
        private accountTitle;
        private accountBg;
        private passwordTitle;
        private passwordBg;
        private bg;
        private createGameScene();
        private dropBtn;
        private upBtn;
        private dropAreaSc;
        private dropAreaSp;
        private accountBtnArr;
        private deleteBtnArr;
        private bgimg;
        private createDropDownArea();
        private txtSpArr;
        private deleteSpArr;
        private deleteAccount(e);
        private changeArea(e);
        private bgimgY;
        private ondropBtn();
        private onupBtn();
        private info;
        private touchTxt(e);
        private toucBg();
        on_sureBtn(e: egret.TouchEvent): void;
        on_againPasswordBtn(e: egret.TouchEvent): void;
        on_loginOtherBtn(e: egret.TouchEvent): void;
        layout(): void;
        clearBtn(): void;
        dispose(): void;
        mainAssetName(): string;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *注册面板
 */
declare module kelvin.texas {
    class RegisterPanel extends BasePanel {
        constructor(type: string);
        private type;
        private sureBtn;
        private sureAgainBtn;
        private againTitle;
        private registerTitle;
        private createGameScene();
        private againSendBtn;
        private sendBtn;
        private iphoneInputText;
        private codeInputText;
        private timeText;
        private redPrompt;
        private createIphoneUI();
        private recordNum;
        private timeTimer;
        private createTimeDown();
        private startTimeDown();
        private stopTimeDown();
        private runTime();
        on_sendBtn(): void;
        newPasswordTxt: egret.TextField;
        againPasswordTxt: egret.TextField;
        private txt2;
        private txt3;
        private createAPUI();
        private focusIn(e);
        private focusOut(e);
        on_sureBtn(e: egret.TouchEvent): void;
        on_sureAgainBtn(e: egret.TouchEvent): void;
        private sendMsg();
        againFailError(data: any): void;
        private againpassword(data);
        private registersuccess(data);
        dispose(): void;
        mainAssetName(): string;
    }
}
declare module kelvin.texas {
    class MainPanel extends BasePanel {
        constructor();
        bg: egret.Bitmap;
        private topview;
        private bottomView;
        private matchView;
        private popup;
        private createGameScene();
        private getRewardInfo(data);
        isHaveGameStart(data: any): void;
        private timeid1;
        private isCanGetPeople;
        startGetPeopleNum(): void;
        getPeopleNum(): void;
        peopleInfo(data: any): void;
        leaveView(): void;
        backView(): void;
        isBandingPhone(): void;
        private popNoticePop();
        private personal;
        private createPersonalView();
        layout(): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 弹窗界面
 */
declare module kelvin.texas {
    class PopupView extends BasePanel {
        constructor();
        private createGameScene();
        private mzjgbView;
        private createMZJGBView(data);
        private jsbView;
        private createJBSView();
        private bsxqView;
        private createBSXQView(data);
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 下面部分
 */
declare module kelvin.texas {
    class ViewBottom extends BasePanel {
        constructor();
        jlbBtn: starlingswf.SwfButton;
        scBtn: starlingswf.SwfButton;
        bszqBtn: starlingswf.SwfButton;
        phBtn: starlingswf.SwfButton;
        grxxBtn: starlingswf.SwfButton;
        bszqcover: egret.Bitmap;
        othercover: egret.Bitmap;
        private createGameScene();
        private gotoMatchView();
        layout(): void;
        on_jlbBtn(e: egret.TouchEvent): void;
        on_scBtn(e: egret.TouchEvent): void;
        on_bszqBtn(e: egret.TouchEvent): void;
        on_phBtn(e: egret.TouchEvent): void;
        on_grxxBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 * 主界面的上面
 *
 */
declare module kelvin.texas {
    class ViewTop extends BasePanel {
        constructor();
        nameTxt: egret.TextField;
        uidTxt: egret.TextField;
        goldTxt: egret.TextField;
        scoreTxt: egret.TextField;
        setBtn: starlingswf.SwfButton;
        setView: starlingswf.SwfSprite;
        huodongBtn: starlingswf.SwfButton;
        gonggaoBtn: starlingswf.SwfButton;
        xiaoxiBtn: starlingswf.SwfButton;
        private headImg;
        private headSp;
        private topSclexImg;
        private setBg;
        private createGameScene();
        private goldChange();
        private initHead();
        layout(): void;
        on_setBtn(e: egret.TouchEvent): void;
        on_huodongBtn(e: egret.TouchEvent): void;
        on_gonggaoBtn(e: egret.TouchEvent): void;
        on_xiaoxiBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 大师分排行榜UI
*/
declare module kelvin.texas {
    class MasterRankRule extends BasePanel {
        constructor();
        private ruleImg;
        private createGameScene();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 大师分排行榜UI
*/
declare module kelvin.texas {
    class MasterRankUI extends BasePanel {
        constructor();
        private blueBg;
        private createGameScene();
        private data;
        private spArr;
        createUi(data: MasterRankIF[]): void;
        private selfSp;
        createSelfUI(data: MasterRankIF): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 大师分排行榜
*/
declare module kelvin.texas {
    class MasterRankView extends BasePanel {
        constructor();
        timeTxt: egret.TextField;
        backBtn: starlingswf.SwfButton;
        ruleBtn: starlingswf.SwfButton;
        private rankUI;
        private ruleUI;
        private createGameScene();
        private infoarr;
        getInfo(data: any): void;
        on_ruleBtn(e: egret.TouchEvent): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 锦标赛的每一行
 */
declare module kelvin.texas {
    class JbsLineUI extends BasePanel {
        constructor(data: SngInfoIF, index: number);
        data: SngInfoIF;
        private index;
        alreadysignimg: egret.Bitmap;
        mtticon: egret.Bitmap;
        sngicon: egret.Bitmap;
        lightBg: egret.Bitmap;
        darkBg: egret.Bitmap;
        delayImg: starlingswf.SwfButton;
        gameImg: starlingswf.SwfButton;
        stopImg: starlingswf.SwfButton;
        sginImg: starlingswf.SwfButton;
        titleTxt: egret.TextField;
        sginmoneyTxt: egret.TextField;
        peopleNumTxt: egret.TextField;
        promptTxt: egret.TextField;
        explainTxt: egret.TextField;
        delayTxt: egret.TextField;
        masterBtn: starlingswf.SwfButton;
        private initUI();
        private createGameScene();
        private controlHContanier(data);
        private iscanTouch;
        private touch();
        private updateState();
        private updateUI();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 锦标赛
 */
declare module kelvin.texas {
    class JbsView extends BasePanel {
        constructor(type: string);
        private type;
        private servertype;
        private bg;
        private sngUI;
        private mttUI;
        private chooseLine;
        private pageView;
        sngBtn: starlingswf.SwfButton;
        mttBtn: starlingswf.SwfButton;
        titleSng: egret.TextField;
        titleMtt: egret.TextField;
        private titleImg;
        private timer;
        private createGameScene();
        private titleArr;
        private uiArr;
        private getTitleInfo(data);
        private updateAllUI();
        private chooseTitleId;
        private getMatchInfo(name);
        private infoArr;
        private getInfoSuccess(data);
        private lineUIArr;
        private updataUI();
        private refreshCall();
        private switchJBSUI();
        private dateUtils;
        private delayTimeRun();
        backView(): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
        private sngInfo;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛专区的主界面
 *
 */
declare module kelvin.texas {
    class MatchView extends BasePanel {
        constructor();
        private waccBtn;
        private jbsBtn;
        private waccPeopleTxt;
        private jbsPeopleTxt;
        private createGameScene();
        setPeopleNumTxt(wcaa: number, jbs: number): void;
        on_jbsBtn(e: egret.TouchEvent): void;
        on_waccBtn(e: egret.TouchEvent): void;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 消息的每一行
 */
declare module kelvin.texas {
    class NewsLineUI extends BasePanel {
        constructor(data: NewsInfoIF);
        private data;
        private xtImg;
        private sngImg;
        private mttImg;
        private timeTxt;
        private titleTxt;
        private contentTxt;
        private stateTxt;
        private jrpjBtn;
        private ckxqBtn;
        private createGameScene();
        private initState();
        on_jrpjBtn(e: starlingswf.SwfButton): void;
        on_ckxqBtn(e: starlingswf.SwfButton): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 * 消息主界面
 */
declare module kelvin.texas {
    class NewsView extends BasePanel {
        constructor();
        private bg;
        private clearBtn;
        private createGameScene();
        private infoArr;
        private getInfo(data);
        uiArr: NewsLineUI[];
        private createUI();
        on_clearBtn(e: egret.TouchEvent): void;
        clearSuccess(): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 消息详情弹窗
 */
declare module kelvin.texas {
    class NewsXqPopup extends BasePanel {
        constructor(data: NewsInfoIF);
        private data;
        private titleTxt;
        private contentTxt;
        private goldTxt;
        private getBtn;
        createGameScene(): void;
        on_getBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 * 公告或者活动的详细信息
 */
declare module kelvin.texas {
    class NoticeInfo extends BasePanel {
        constructor(urlArr: string[]);
        private urlArr;
        private bg;
        private createGameScene();
        private createImg();
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 公告弹窗
 */
declare module kelvin.texas {
    class NoticePopup extends BasePanel {
        constructor();
        private imgurl;
        private bgSp;
        private noticeimg;
        private whiteImg;
        private gouImg;
        private txt;
        closeBtn: starlingswf.SwfButton;
        private createGameScene();
        private choose();
        private createImg();
        private touchNotice(e);
        hide(): void;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 * 活动主界面
 */
declare module kelvin.texas {
    class NoticeView extends BasePanel {
        constructor();
        private bg;
        private createGameScene();
        private clearBtn;
        private infoArr;
        private getInfo(data);
        uiArr: ActiveLineUI[];
        private createUI();
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * 活动条
 */
declare module kelvin.texas {
    class PackLineUI extends BasePanel {
        constructor(data: PackInfoIF);
        private data;
        private startTimeTxt;
        private nameTxt;
        private typeTxt;
        private endTimeTxt;
        private descTxt;
        private thingImg;
        private ysyBtn;
        private wsyBtn;
        private ygqBtn;
        private createGameScene();
        private createImg();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 * 背包主界面
 */
declare module kelvin.texas {
    class PackView extends BasePanel {
        constructor(type: number);
        private type;
        private bg;
        private titleTxt;
        private historyBtn;
        private createGameScene();
        private infoArr;
        private getInfo(data);
        uiArr: PackLineUI[];
        private createUI();
        on_historyBtn(e: egret.TouchEvent): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 得到奖品
 */
declare module kelvin.texas {
    class GetPrizePopup extends BasePanel {
        constructor();
        private goBtn;
        private contentTxt;
        private createGameScene();
        on_goBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 得到奖品
 */
declare module kelvin.texas {
    class GetPrizeView extends BasePanel {
        constructor(callback?: Function, isgame?: boolean);
        private callback;
        private submitBtn;
        private isgame;
        private nameTxt;
        private idcardTxt;
        private zfbTxt;
        private nameInputTxt;
        private idcardInputTxt;
        private zfbInputTxt;
        private text;
        private close;
        private createGameScene();
        on_submitBtn(e: egret.TouchEvent): void;
        subminSuccess(data: any): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 * 个人信息的详细面板
 */
declare module kelvin.texas {
    class PersonalInfo extends BasePanel {
        constructor();
        private bg;
        private phoneTxt;
        private idTxt;
        private nameTxt;
        private chooseXtBtn;
        private chooseZdyBtn;
        private view;
        private createGameScene();
        private headSp;
        private headBgSp;
        private scrollview;
        private scSp;
        private scImg;
        private createChangeHeadUI();
        showChooseHeadUI(): void;
        hideChooseHeadUI(): void;
        private imgArr;
        private frame;
        private createImgUI();
        touImg(e: egret.TouchEvent): void;
        initImg(): void;
        private showHead;
        updateHeadImg(): Promise<void>;
        on_backBtn(e: egret.TouchEvent): void;
        on_chooseXtBtn(e: egret.TouchEvent): void;
        on_chooseZdyBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 * 个人信息主页
 */
declare module kelvin.texas {
    class PersonalView extends BasePanel {
        constructor();
        private changeHeadBtn;
        private changeImg;
        private nameTxt;
        private idTxt;
        private zjBtn;
        private szBtn;
        private bbBtn;
        private hjxxdjBtn;
        private bg;
        view: starlingswf.SwfSprite;
        bgSp: egret.Sprite;
        private createGameScene();
        private headImg;
        private headSp;
        private initHead();
        show(): void;
        hide(): void;
        on_changeHeadBtn(e: egret.TouchEvent): void;
        on_zjBtn(e: egret.TouchEvent): void;
        on_bbBtn(e: egret.TouchEvent): void;
        on_hjxxdjBtn(e: egret.TouchEvent): void;
        on_szBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 报名费不够提示
 */
declare module kelvin.texas {
    class ApplyPrompt extends BasePanel {
        constructor(type: any);
        private type;
        private promptTxt;
        private goBtn;
        private btnTxt;
        createGameScene(): void;
        on_goBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
declare module kelvin.texas {
    class RankInfoListLine extends eui.ItemRenderer {
        constructor();
        private view;
        private headImg;
        private nameTxt;
        private resultTxt;
        private rankingTxt;
        private rankimg3Img;
        private rankimg2Img;
        private rankimg1Img;
        private bgImg;
        private line;
        private goldImg;
        private scoreImg;
        data: RankDeInfoLineIF;
        private createGameScene();
        setData(data: RankDeInfoLineIF): void;
        dataChanged(): void;
        private showUI();
        private showHead();
        initState(): void;
        assetSwf(): starlingswf.Swf;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 战绩详情界面
 */
declare module kelvin.texas {
    class RankInfoView extends BasePanel {
        constructor(data: any);
        private switchData();
        private data;
        private bg;
        private titleTxt;
        private timeTxt;
        private matchTimeTxt;
        private matchJoinNumTxt;
        private matchJackpotTxt;
        private matchWinTxt;
        private matchLiveTxt;
        private allPeopleTxt;
        private selfLine;
        private createGameScene();
        private selfData;
        getInfo(data: any): void;
        private list;
        private createList();
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * 战绩的每一行
 */
declare module kelvin.texas {
    class RankLine extends BasePanel {
        constructor(data: RankDeInfoIF);
        private data;
        private rect;
        private mttIcon;
        private sngIcon;
        private titleTxt;
        private scroeTxt;
        private rankTxt;
        private peopleTxt;
        private buyTxt;
        private timeTxt;
        private jbBtn;
        private goldImg;
        private scoreImg;
        private createGameScene();
        private touch(e);
        private initState();
        private upDateUI();
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 战绩面板
 */
declare module kelvin.texas {
    class RankView extends BasePanel {
        constructor();
        private bg;
        private view;
        private allBtn;
        private downImg;
        private upImg;
        isdrop_down: boolean;
        private createGameScene();
        private infoArr;
        private getInfo(data);
        private uiArr;
        private updateUI(name);
        private chooseSp;
        private chooseTypeArr;
        private choosebg;
        private maskSc;
        private chooseUIArr;
        private createChooseSp();
        private touchRect(e);
        private touchChoose(e);
        showChoose(): void;
        hideChoose(): void;
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 刷新的动画
 */
declare module kelvin.texas {
    class RefreshUI extends BasePanel {
        constructor();
        private static _ins;
        static readonly ins: RefreshUI;
        private loadImg;
        private createGameScene();
        show(x?: number, y?: number): void;
        hide(): void;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 设置面板
 *
 */
declare module kelvin.texas {
    class SetView extends BasePanel {
        constructor();
        private bg;
        private mopenBtn;
        private mcloseBtn;
        private mopenTxt;
        private mcloseTxt;
        private gopenBtn;
        private gcloseBtn;
        private gopenTxt;
        private gcloseTxt;
        private verTxt;
        private verBg;
        private back2Btn;
        createGameScene(): void;
        initState(): void;
        upState(): void;
        on_mopenBtn(e: egret.TouchEvent): void;
        on_mcloseBtn(e: egret.TouchEvent): void;
        on_gopenBtn(e: egret.TouchEvent): void;
        on_gcloseBtn(e: egret.TouchEvent): void;
        on_backBtn(e: egret.TouchEvent): void;
        on_back2Btn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 * 商城的每一个小块
 */
declare module kelvin.texas {
    class ShopMinUI extends BasePanel {
        constructor(data: ShopInfoIF);
        private data;
        private goldTxt;
        private rmbTxt;
        private buyBtn;
        private createGameScene();
        on_buyBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 商店购买
 */
declare module kelvin.texas {
    class ShopView extends BasePanel {
        constructor();
        private bg;
        private createGameScene();
        private infoArr;
        private getInfo();
        uiArr: ShopMinUI[];
        private createUI();
        on_backBtn(e: egret.TouchEvent): void;
        mainAssetName(): string;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class ApiState {
        static stateTxt: any;
        static show(state: string): void;
        static showText(text: string | Array<egret.ITextElement>): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 公用弹窗
 */
declare module kelvin.texas {
    class CommonPopup extends BasePanel {
        constructor(content: string | Array<egret.ITextElement>, success?: Function, fail?: Function, title?: string | Array<egret.ITextElement>);
        contentStr: string | Array<egret.ITextElement>;
        titleStr: string | Array<egret.ITextElement>;
        success: Function;
        fail: Function;
        contentText: egret.TextField;
        titleTxt: egret.TextField;
        cancelBtn: starlingswf.SwfButton;
        sureBtn: starlingswf.SwfButton;
        private createGameScene();
        on_sureBtn(e: egret.Event): void;
        on_cancelBtn(e: egret.Event): void;
        mainAssetName(): string;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 可以玩家输入的输入框
 *
 */
declare module kelvin.texas {
    class InputText extends egret.DisplayObjectContainer {
        /**
         * @param text 如果text已经放入舞台上，则本容器不需要再放入了
         * @param issige
         */
        constructor(text: egret.TextField, issingle?: boolean);
        private issingle;
        private inputText;
        private createGameScene();
        addSingle(): void;
        changesingle: boolean;
        private focusIn();
        private focusOut();
        /**
         * 再次输入时是否清除之前内容  true为清除，false为不清除  数字为清除几次后不清除   默认为true清除
         */
        private _isClear;
        isClear: boolean | number;
        /**
         *
         */
        /**
         * 设置输入状态下的文本颜色
         * @param  color 颜色  格式  0x000000
         */
        private inColor;
        setInPutColor(color: number): void;
        /**
         * 设置输入后的文本颜色
         * @param  color 颜色  格式  0x000000
         */
        private outColor;
        setOutPutColor(color: number): void;
        /**
         * 设置默认文本  就是当文本为空时应该显示的内容
         * @param str 默认的文本内容
         * @param frequency 文本内容改换的次数  =-1  是无限次 ;  >=0  就是改变相应的次数 ；
         */
        private defaultStr;
        private frequency;
        setDefaultText(str: string, frequency?: number): void;
        /**
         * 玩家在准备输入时的回调函数
         * @param callback 回调函数
         */
        private inCallBack;
        private inself;
        setInCallBack(callback: Function, self?: any): void;
        /**
         * 玩家在输入完成后的回调函数
         * @param callback 回调函数
         */
        private outCallBack;
        private outself;
        setOutCallBack(callback: Function, self?: any): void;
        /**
         * 是否为密码文本
         */
        private _ispassword;
        ispassword: boolean;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class LoadingUI extends egret.Sprite {
        private static _instance;
        static readonly ins: LoadingUI;
        show(type: number): void;
        showText(str: string): void;
        time1: number;
        hide(): void;
        setProgress(current: number): void;
        private gameloadui;
        private netLoad;
        private loadBg;
        constructor();
        private touchBtn(e);
    }
}
declare module kelvin.texas {
    /**
     * 网络图片
     */
    class NetImage extends egret.DisplayObjectContainer {
        image: egret.Bitmap;
        loader: egret.ImageLoader;
        setNativSize: boolean;
        constructor(url: string, setNativSize?: boolean);
        reload(url: any): void;
        loadComplete(e: egret.Event): void;
        dispose(): void;
        $setWidth(value: number): boolean;
        $getWidth(): number;
        $setHeight(value: number): boolean;
        $getHeight(): number;
    }
}
declare module kelvin.texas {
    class NetWorkError extends egret.DisplayObjectContainer {
        static show(): void;
        mainAsset: starlingswf.SwfSprite;
        constructor();
        onOkBtn(e: egret.Event): void;
    }
}
declare module kelvin.texas {
    class NetworkLoading {
        private static loading;
        private static background;
        private static showCount;
        static show(now?: boolean): number;
        static hideBackGround(): void;
        static realyShow(): void;
        static hide(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 弹窗容器
 */
declare module kelvin.texas {
    class PopupContainer extends BasePanel {
        constructor(view: BasePanel);
        private view;
        private bgSp;
        private createGameScene();
        private animatypes;
        private animatypee;
        show(animatypes: number, animatypee: number, alpha?: number): void;
        hide(): void;
        dispose(): void;
    }
}
declare module kelvin.texas {
    class ScrollView extends eui.Scroller {
        container: eui.Group;
        scrollSize: eui.Image;
        constructor();
        /**
         * 设置展示区域大小
         */
        setShowSize(w: number, h: number): void;
        /**
         * 设置滚动区域大小
         */
        setScrollSize(w: number, h: number): void;
        removeAllChild(): void;
        reStartAnimation(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 数组方法
 */
declare module kelvin.texas {
    class ArrayUtil {
        /**
         * a包含b ps：b是不断变化的
         * @param
         */
        static isContained(a: any[], b: any[]): boolean;
        /**
         * 根据数组中对象的key值，给数组重新排位置，升序排
         * @param key 数组元素对象的key
         */
        static AscendingArray(key: string, arr: any[]): void;
        /**
         * 给游戏数据排序
         *
         */
        static sortGameData(arr: SngInfoIF[]): SngInfoIF[];
    }
}
declare module kelvin.texas {
    class BmTextUtil {
        static replaceTextfield(textfield: any, font: egret.BitmapFont): egret.BitmapText;
    }
}
declare module kelvin.texas {
    class ClipBoard {
        static copy(msg: string): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * 碰撞工具
 */
declare module kelvin.texas {
    /**
     * 碰撞工具类
     */
    class CollisionUtils {
        constructor();
        static hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean;
        static hitTestP(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean;
        static sreatPoints(obj: egret.Sprite): egret.Point[];
        /**检测两个对象是否碰撞*/
        static getObjPoint(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean;
    }
}
declare module kelvin.texas {
    class ColorUtil {
        /**
         * 设置对象颜色为灰色
         */
        static setGray(display: egret.DisplayObject): void;
        /**
         *
         * 设置对象颜色变黑一点
         */
        static setLittleBlack(display: egret.DisplayObject): void;
        /**
         * 清除颜色
         */
        static clearColor(display: egret.DisplayObject): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *时间方法
 */
declare module kelvin.texas {
    class DateUtils {
        constructor();
        /**
         * 根据秒数格式化字符串
         * @param second 秒数
         * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00   4:xx天前，xx小时前，xx分钟前
         * @return
         *
         */
        getFormatBySecond(second: number, type?: number): string;
        private getFormatBySecond1(t?);
        private getFormatBySecond3(t?);
        private getFormatBySecond2(time);
        private getFormatBySecond4(time);
        private getFormatBySecond6(t?);
        private getFormatBySecond5(time);
        static fmtDate(num: number): any;
        static formatDate(date: any): string;
        static timestampToTime(timestamp: any): string;
    }
}
declare module kelvin.texas {
    class EventManager {
        private static _commands;
        private static _commandsThisObjects;
        /***
         * 清除所有命令
         */
        static clearCmd(): void;
        /**
         * 注册命令
         */
        static registerCmd(cmd: string, callBack: Function, thisObj: any, isHead?: boolean): void;
        /**
         * 移除命令
         */
        static removeCmd(cmd: string, callBack: Function, thisObj: any): void;
        /**
         * 派发命令消息
         */
        static dispatchCmd(cmd: string, data: any): void;
    }
}
declare module kelvin.texas {
    class Fingerprint2Utils {
        static fingerprint2: any;
        static fingerprintData: any;
        static init(callBack: Function): void;
        static getId(): string;
        static getBuild(): string;
        static getAvailableScreenResolution(): string;
    }
}
declare module kelvin.texas {
    class InterfaceVariablesUtil {
        static initVariables(obj: any, interFace: egret.DisplayObjectContainer, recursiveBind?: boolean, hasEventBtns?: any, hasEventBtnNames?: any): void;
        static disposeVariables(obj: any): void;
        static initVariablesWithType(obj: any, interFace: egret.DisplayObjectContainer, clazz: any): void;
    }
}
declare module kelvin.texas {
    class LayoutUtil {
        /**
         * 靠上对其
         */
        static layout_up(display: egret.DisplayObject): void;
        /**
         * 靠下对其
         */
        static layout_down(display: egret.DisplayObject): void;
        /**
         * 左对其
         */
        static layout_left(display: egret.DisplayObject): void;
        /**
         * 左上
         */
        static layout_left_up(display: egret.DisplayObject): void;
        /**
         * 左下
         */
        static layout_left_down(display: egret.DisplayObject): void;
        /**
         * 右对齐
         */
        static layout_right(display: egret.DisplayObject): void;
        /**
         * 右上
         */
        static layout_right_up(display: egret.DisplayObject): void;
        /**
         * 右下
         */
        static layout_right_down(display: egret.DisplayObject): void;
        /**
         * X居中
         */
        static layout_center_x(display: egret.DisplayObject): void;
        /**
         * Y居中
         */
        static layout_center_y(display: egret.DisplayObject): void;
        /**
         * 正中间
         */
        static layout_center_xy(display: egret.DisplayObject): void;
        /**
         * 中上
         */
        static layout_center_up(display: egret.DisplayObject): void;
        /**
         * 中下
         */
        static layout_center_down(display: egret.DisplayObject): void;
        /**
         * 填充
         */
        static layout_fill(display: egret.DisplayObject): void;
        static getLayoutX(display: egret.DisplayObject): number;
        static getLayoutY(display: egret.DisplayObject): number;
        /**
         * 缩放
         */
        static layout_scale(display: egret.DisplayObject): void;
    }
}
declare module kelvin.texas {
    class Log {
        static enabled: boolean;
        static log(data: any): void;
        tracktrace(count?: number): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 * 登录方法
 */
declare module kelvin.texas {
    class LoginUtil {
        static login(account: string, password: string, loginscene: LoginView, success?: Function, errback?: Function): void;
    }
}
declare class md5 {
    constructor();
    private hexcase;
    private b64pad;
    hex_md5(s: any): string;
    private b64_md5(s);
    private any_md5(s, e);
    private hex_hmac_md5(k, d);
    private b64_hmac_md5(k, d);
    private any_hmac_md5(k, d, e);
    private md5_vm_test();
    private rstr_md5(s);
    private rstr_hmac_md5(key, data);
    private rstr2hex(input);
    private rstr2b64(input);
    private rstr2any(input, encoding);
    private str2rstr_utf8(input);
    private str2rstr_utf16le(input);
    private str2rstr_utf16be(input);
    private rstr2binl(input);
    private binl2rstr(input);
    private binl_md5(x, len);
    private md5_cmn(q, a, b, x, s, t);
    private md5_ff(a, b, c, d, x, s, t);
    private md5_gg(a, b, c, d, x, s, t);
    private md5_hh(a, b, c, d, x, s, t);
    private md5_ii(a, b, c, d, x, s, t);
    private safe_add(x, y);
    private bit_rol(num, cnt);
}
declare module kelvin.texas {
    class QRCode {
        /**html中<img>标签二维码*/
        private htmlCode;
        private shape;
        /**
         * @param htmlCodeUrl htmlCode二维码链接
         */
        constructor(htmlCodeUrl: string);
        on_Shape(e: egret.Event): void;
        /**
         * 显示二维码
         */
        showHtmlCode(): void;
        /**隐藏二维码*/
        hideHtmlCode(): void;
        /**
         * 设置二维码图片位置
         * @param xPos x坐标
         * @param yPos y坐标
         * @param width 宽度
         * @param height 高度
         */
        setPosition(xPos: number, yPos: number, width: number, height: number): void;
        /**销毁*/
        destroy(): void;
    }
}
declare module kelvin.texas {
    class RandomUtils {
        static getRandomIntBetween(a: number, b: number, toInt?: boolean): number;
        /**
    * 获取一个区间的随机数
    * @param $from 最小值
    * @param $end 最大值
    * @returns {number}
    */
        static limit($from: number, $end: number): number;
        /**
         * 获取一个区间的随机数(帧数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        static limitInteger($from: number, $end: number): number;
        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */
        randomArray(arr: Array<any>): any;
        /**生成一随机数列数组 */
        static getArray(count: number, maxs: number, mins: number): number[];
        static getRandom(maxs: number, mins: number): number;
        static search(array: number[], num: number): boolean;
        static guid(): string;
    }
}
/**
 * 分享工具
 */
declare namespace kelvin.texas {
    class ShareUtils {
        /**
         * 分享带二维码的图片
         * @param display 要分享的图片容器  分享的图片大小和display大小一致
         * @param  type  "session" 分享给好友   "timeline"：分享给朋友圈
         */
        static shareImgAndCode(display: egret.DisplayObject, type?: string): void;
        /**
         * 得到二维码
         *
         * @param w 二维码宽
         * @param h 二维码高
         * @param x 二维码x
         * @param y 二维码y
         */
        static getShareCode(w: number, h: number, x?: number, y?: number): egret.Sprite;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 字符串工具
 */
declare namespace kelvin.texas {
    class StrUtil {
        /**
         * 将数字转化为中文大写
         */
        static number_chinese(str: any): string;
        /**
        * 名字截取一部分  ps:只支持英文，中文，数字
        * @param length 截取长度 ，中文一个 ，英文半个  addstr  要加在后面的字符串
        */
        static cutOutName(str: string | number, length?: number, addstr?: string): string;
        /**
         *
         * 返回字符串的实际长度, 一个汉字算2个长度
         */
        static getNumByStr(str: string): number;
        /**
         *
         * 判断字符串是否只包含中文和英文
         */
        static judgeOnlyContainEAndC(str: string): boolean;
        /**判断是否是手机号**/
        static isPhoneNumber(tel: string): boolean;
        /**判断非法字符串 */
        static isHaveIllegal(str: string): boolean;
        /**判断是否为正整数 */
        static isPositiveInteger(str: string): boolean;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 工具类
 */
declare module kelvin.texas {
    class Tool {
        constructor();
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         * @param name:生成纹理的索引名字  touchEnabled,是否打开点击事件
         */
        static createBitmapByName(name: string, touchEnabled?: boolean, X?: number, Y?: number, W?: number, H?: number): egret.Bitmap;
        /**
         * 根据纹理集生成eui.Image
         * @param ruleImgs  egret.SpriteSheet name 资源名
         */
        static createBitmapBySheet(ruleImgs: egret.SpriteSheet, name: string): egret.Bitmap;
        /**
        * 用url生成Bitmap
        * @param url 资源url Sp 需要纹理的Bitmap self 作用域
        */
        static createBitmapByUrl(url: string, Sp: egret.Bitmap, self: any): any;
        /**
        * 用url得到纹理
        * @param url 资源url
        */
        static getTextureByUrl(url: string): Promise<any>;
        /**
         * 用url加载文本
         */
        static getTxtByUrl(url: string): Promise<any>;
        /**
        * 用name得到纹理
        * @param name 资源名  ps:该名字必须在资源组内
        */
        static getTextureByName(name: string): Promise<any>;
        /**
        * 用name得到纹理
        * @param name 资源名或者url
        */
        static getTextureByUrlOrName(name: string): Promise<any>;
        /**
        * 获取对应的bitmaptext
        */
        static createBitmapText(bfont: string, X?: number, Y?: number): egret.BitmapText;
        /**
         * 创建一个对应的动画
         */
        static createMovieClip(mcName: string, NameJson?: string, NamePng?: string): egret.MovieClip;
        /**
         * 创建矩形
         *
         */
        static createRectSprite(_width: number, _height: number, color?: number, X?: number, Y?: number, Alpha?: number): egret.Sprite;
        /**
         * 创建一个Sprite
         * @param  center 是否居中
         */
        static createSprite(X?: number, Y?: number, W?: number, H?: number, center?: boolean): egret.Sprite;
        /**
         * 创建一个Text对象
         * @param
         */
        static createTextFiled(x: number, y: number, width: number, height: number, str?: string, size?: number, color?: number, iscenter?: string, isvalign?: string, bold?: boolean): egret.TextField;
        /**
         * Text可以输入
         * @param obj: 文本对象, defaultStr: 默认字符, inputColor: 输入时颜色 outColor:输入完成后的对象, isclear: 未再次输入文本是否内容置空
         */
        static setInputTextFiled(obj: egret.TextField, defaultStr: string, inputColor?: number, outColor?: number, isclear?: boolean): void;
        /**
       *把方形图片变为圆形图片
       * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
       */
        static createCircularMask(Sp: egret.DisplayObject, X?: number, Y?: number): egret.Sprite;
        /**
        *将方形变为圆角矩形图片
        * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
        */
        static createRectMask(Sp: egret.DisplayObject, EW: number, EY: number): egret.Sprite;
        /**
         *
         *将方形图片变为上或下的圆角矩形//
         * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角，false,为下圆角
         */
        static createRectUpOrDownMask(Sp: egret.DisplayObject, EW: number, EY: number, aspect?: boolean): egret.Sprite;
        /**
         *
         *适配背景图片  width是宽与屏幕一样大，高无法完全显示,height是高与屏幕一样高,宽无法完全显示
         * @param displayObj 背景图片   align:显示方式
         */
        static scaleBg(displayObj: egret.Bitmap, align?: string): void;
        /**
         * 将一个容器的锚点移到中心
         *  @param  obj 要居中的对象，is居中后是否回到原位
         */
        static center(obj: egret.DisplayObject, is?: Boolean): void;
        /**
        * 将一个容器的锚点移到中心
        *  @param  obj 要宽居中的对象，is居中后是否回到原位
        */
        static centerWidth(obj: egret.DisplayObject, is?: Boolean): void;
        /**
        * 将一个类的锚点移到中心
        *  @param  obj 要高居中的对象，is居中后是否回到原位
        */
        static centerHeight(obj: egret.DisplayObject, is?: Boolean): void;
        /**
            * 从父级移除childss
            * @param child
            */
        static removeFromParent(child: egret.DisplayObject): void;
        /**
            * 锁屏
            */
        static lock(): void;
        /**
         * 解屏
         */
        static unlock(): void;
        static checkImage(obj: egret.DisplayObjectContainer): void;
        /**
        * @param frame 根据帧频返回偏移量
        */
        static frameRate(frame: number): number;
        /**
       * @param base64 字符串
       */
        static getTexture(base64: string): egret.Texture;
        /**
         * 开始点击按钮变小
         *
         */
        static ButtonNarrow(btn: egret.DisplayObject, self: any): void;
        static trace(count: any): void;
        /**
         * 重新 替换掉swf的 文本
         * @param txt变量名
         * @param self  作用域
         */
        static replaceSwfTxt(txt: string, self: any): void;
    }
}
declare module kelvin.texas {
    class TweenQueue {
        private static _queueMap;
        private static _currentTween;
        private static _currentTimeout;
        static getQueue(key: string): any[];
        static get(target: any, props: any, duration: number, ease?: Function, wait?: number, callBack?: Function, callBackObj?: any, callBackParams?: any[], queueKey?: string): void;
        static addWait(wait: number, callBack?: Function, callBackObj?: any, callBackParams?: any[], queueKey?: string): void;
        static getWithKey(queueKey: string, target: any, props: any, duration: number, ease?: Function, wait?: number, callBack?: Function, callBackObj?: any, callBackParams?: any[]): void;
        static addWaitWithKey(queueKey: string, wait: number, callBack?: Function, callBackObj?: any, callBackParams?: any[]): void;
        static getWithNoQueue(target: any, props: any, duration: number, ease?: Function, wait?: number, callBack?: Function, callBackObj?: any, callBackParams?: any[]): void;
        private static callBack(queue, queueKey);
        private static callBack2(callBack, callBackObj, callBackParams, queue, queueKey);
        static clearQueue(key?: string): void;
        static clearAllQueue(): void;
    }
}
/**
 *
 *
 *
 *
 *
 *
 *
 * url的工具
 */
declare module kelvin.texas {
    class UrlUtil {
        static getUrlArgStr(): string;
    }
}
declare module qr {
    class QR8bitByte {
        private mode;
        private data;
        private parsedData;
        constructor(data: any);
        getLength(buffer: any): number;
        write(buffer: any): void;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRBitBuffer {
        buffer: any;
        length: number;
        constructor();
        get(index: any): boolean;
        put(num: any, length: any): void;
        getLengthInBits(): number;
        putBit(bit: any): void;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRCode {
        /**
         * msg
         * width,height 二维码宽度，高度
         * color 颜色
         *
         * errorCorrectLevel:
         * level L : 最大 7% 的错误能够被纠正；
         * level M : 最大 15% 的错误能够被纠正；
         * level Q : 最大 25% 的错误能够被纠正；
         * level H : 最大 30% 的错误能够被纠正；
         *
         * typeNumber:
         * QR图的大小(size)被定义为版本（Version)，版本号从1到40。版本1就是一个21*21的矩阵，每增加一个版本号，矩阵的大小就增加4个模块(Module)，
         * 因此，版本40就是一个177*177的矩阵。（版本越高，意味着存储的内容越多，纠错能力也越强）。
         * */
        static create(msg: string, width?: number, height?: number, errorCorrectLevel?: number, typeNumer?: number, color?: number): egret.Sprite;
        static draw(m: qr.QRCodeModel, _htOption: any): egret.Sprite;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRCodeModel {
        typeNumber: number;
        errorCorrectLevel: any;
        modules: any;
        moduleCount: number;
        dataCache: any;
        dataList: any[];
        constructor(typeNumber: any, errorCorrectLevel: any);
        addData(data: any): void;
        isDark(row: any, col: any): any;
        getModuleCount(): number;
        make(): void;
        makeImpl(test: any, maskPattern: any): void;
        setupPositionProbePattern(row: any, col: any): void;
        getBestMaskPattern(): number;
        createMovieClip(target_mc: any, instance_name: any, depth: any): any;
        setupTimingPattern(): void;
        setupPositionAdjustPattern(): void;
        setupTypeNumber(test: any): void;
        setupTypeInfo(test: any, maskPattern: any): void;
        mapData(data: any, maskPattern: any): void;
        static PAD0: number;
        static PAD1: number;
        static createData(typeNumber: any, errorCorrectLevel: any, dataList: any): any[];
        static createBytes(buffer: any, rsBlocks: any): any[];
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRErrorCorrectLevel {
        static L: number;
        static M: number;
        static Q: number;
        static H: number;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRMaskPattern {
        static PATTERN000: number;
        static PATTERN001: number;
        static PATTERN010: number;
        static PATTERN011: number;
        static PATTERN100: number;
        static PATTERN101: number;
        static PATTERN110: number;
        static PATTERN111: number;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRMath {
        static isInit: boolean;
        static glog(n: any): any;
        static gexp(n: any): any;
        static EXP_TABLE: any[];
        static LOG_TABLE: any[];
        static init(): void;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRMode {
        static MODE_NUMBER: number;
        static MODE_ALPHA_NUM: number;
        static MODE_8BIT_BYTE: number;
        static MODE_KANJI: number;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRPolynomial {
        num: any;
        constructor(num: any, shift: any);
        get(index: any): any;
        getLength(): any;
        multiply(e: any): QRPolynomial;
        mod(e: any): any;
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRRSBlock {
        totalCount: any;
        dataCount: any;
        constructor(totalCount: any, dataCount: any);
        static RS_BLOCK_TABLE: number[][];
        static getRSBlocks: (typeNumber: any, errorCorrectLevel: any) => any[];
        static getRsBlockTable: (typeNumber: any, errorCorrectLevel: any) => number[];
    }
}
/**
 * Created by qingzhu on 15/7/1.
 */
declare module qr {
    class QRUtil {
        static PATTERN_POSITION_TABLE: number[][];
        static G15: number;
        static G18: number;
        static G15_MASK: number;
        static getBCHTypeInfo(data: any): number;
        static getBCHTypeNumber(data: any): number;
        static getBCHDigit(data: any): number;
        static getPatternPosition(typeNumber: any): number[];
        static getMask(maskPattern: any, i: any, j: any): boolean;
        static getErrorCorrectPolynomial(errorCorrectLength: any): QRPolynomial;
        static getLengthInBits(mode: any, type: any): 9 | 8 | 11 | 10 | 13 | 12 | 14 | 16;
        static getLostPoint(qrCode: any): number;
        static QRCodeLimitLength: number[][];
        static_isSupportCanvas(): boolean;
        static _getTypeNumber(sText: any, nCorrectLevel: any): number;
        static _getUTF8Length(sText: any): number;
    }
}
declare class xLoader {
    private static isInit;
    private static currentLoading;
    private static loadQueue;
    static init(): void;
    private static onConfigComplete(conf);
    private static onConfigError(e);
    private static onGroupProgress(e);
    private static onGroupComplete(e);
    private static onGroupError(e);
    private static loadNext();
    static loadConfig(url: string, resourceRoot: string, callBackThisObj?: any, onComplete?: Function, onError?: Function): void;
    static loadGroup(group: string, callBackThisObj?: any, onProgress?: Function, onComplete?: Function, onError?: Function): void;
}
