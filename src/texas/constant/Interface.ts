module kelvin.texas {


    export interface SngInfoIF {
        id?: string,
        type?: string,//sng  mtt  
        matchtype?: string,//common   wcaa
        signed?: number,//1 是已经报名  2 是未报名  3是已经淘汰
        titie?: string,//标题
        signmoney?: number,//报名费
        havepeople?: number,//已有人数
        allpeople?: number,//总人数
        explain?: string,//奖励
        state?: number,//1是报名中   2是延长报名  ps：延长报名情况下，先调加入房间 数据为null 延迟3再调一次  一直到成功为止   3是截止报名   4是游戏中   5是暂时不能报名
        serverstate?: number,//服务器里游戏的状态   


        buy_count?: number,//可买入上限
        init_game_score?: number//初始记分牌
        apply_date?: number//报名开始的日期
        apply_time?: number//报名开始的时间
        apply_date_end?: number,//报名结束的日期
        apply_time_end?: number,//报名结束的时间
        start_date?: number//游戏开始的日期
        start_time?: number//游戏开始的时间
        apply_delay_time?: number//游戏延迟时间
        mz_level?: number//当前盲注等级
        mz_interval?: number,//涨盲时间
        reward?: number,//当前奖池
        min_reward?: number,//保底奖励
        cur_buy_count?: number,//当前买入次数
        apply_score?: number,//报名的积分
        apply_max_people?: number,//最大报名人数
        apply_max_mz_level?: number//最大盲注等级
        start_date_str?: string,//开赛日期的字符
        start_time_str?: string,//开赛时间的字符
        table_people?: number,//单桌人数
        service_gold?: number,//服务费
        service_score?: number,//服务积分
        break_time_long?: number,//休息时间
        break_interval?: number,//休息间隔
        match_start_time?: number,//后台记录的比赛开始的时间戳

        poker_score_rate?: number,//牌力分占比
        reward_poker_score?: number,//已经分发的牌力分
        over_people?: number,//当前被淘汰的人
        inMoneyCircle?: number,
        masterRule?: any,//大师赛的标记

        master_points_id?: number,//    /** 大师分 id */
        satellite?: number, /** 循环赛 1是 0否 */
        player_buy_count?: number,/** 单个玩家可买入次数 */
        reBuyCount?: number,

        apply_time_str?: string,//报名开始时间的字符串
        ticket_cfgId?:string,


    }

    export interface MatchMaxInfoIF extends SngInfoIF {
        mzTable?: Object,
        roles?: any[],
        pokerScores?: any[],
        gameScores?: any[],
        rooms?: any[],
        moneyCircle?: Object,
        overList?: Object,
        roomInfo?: PZInfoIF[],
        isOver?: boolean,
        hasTicket?:boolean,


    }


    export interface JLRatioIF {
        ratio: number,
        reward: number,
        level: string,
    }
    export interface WJInfoIF {
        name: string,
        score: number,
        money: number,
        heart: number,
        uid?: string,
        rank?: number,
        matchtype?: string,
        matchId: string,
        serverstate?: number,
    }

    export interface PZInfoIF {
        tableid: string,
        usersnum: number,
        max: number,
        min: number,
        match_id?: string,//比赛id
        players?: Object,
        showId?: number,//用来显示的牌桌id
    }


    export interface MZJGBInfoIF {
        level: number,
        blind: string,
        bet: number,

    }

    export interface ActiveInfoIF {

        imgurl?: string,
        title?: string,
        content?: string,
        name?: string,
        time?: string,
        imglengthArr?: string[];
    }

    export interface ShopInfoIF {
        gold: number,
        rmb: number,
    }

    export interface NewsInfoIF {
        title: string,
        content: string,
        type: string,//sng  mtt  xt
        state?: number,
        time?: string,
        // match_state_wait = 0;//未开始 
        // match_state_game = 1;//进行中
        // match_state_reset = 2;//休息中
        // match_state_fail = 4; //比赛开启失败
        // match_state_stop = 5;//人为终止比赛 
        // match_state_over = 6;//比赛结束

    }


    export interface RankDeInfoIF {
        title?: string,
        time?: string,
        matchTime?: number,
        matchJoinNum?: string,
        matchJackpot?: string,
        matchWin?: string,
        matchLive?: string,
        allPeople?: number,
        list?: RankDeInfoLineIF[],
        buy?: number,
        type?: string,
        score?: number,
        rank?: number,
        matchid?: number,
        zhanjiId?: string,
        reward?: number,
        reward_type?: number,/** 奖励类型 1-积分 2-金币 */
        matchtype?: string,
    }

    export interface RankDeInfoLineIF {
        uid: string,
        rank: number,
        headurl: string,
        name: string,
        result: string,
        reward: number,
        matchtype?: string,
        reward_type?: number,/** 奖励类型 1-积分 2-金币 */
    }

    export interface GameRankInfoIF {
        title?: string,
        starttime?: number,
        frontscore?: number,
        allscore?: number,
        avescore?: number,
        myrank?: number,
        rebuy: number,
        nowpeople: number,
        joinpeople: number,
        realpeople: number,
        over_people?: number,
        cur_buy_count?: number,
        list: GameRankListIF[];
    }

    export interface GameRankListIF {
        uid: string,
        rank: number,
        name: string,
        rebuy: number,
        tableid: string,
        score: number,
        showId?: number,//用来显示的牌桌id
    }


    export interface GameCardLineIF {
        name: string,
        headurl: string,
        score: number,
        isdis: number,
        mycard: string[],
        commoncard: string[],
        uid?: string,
    }


    export interface MasterRankIF {
        name: string,
        uid: string,
        time: string,
        score: number,
        rank: number,
    }


    export interface PackInfoIF {
        startTime: string,
        name: string,
        imgurl?: string,
        type: string,
        state: number, //1是未使用  2 是已使用  3是已过期
        endTime: string,
        desc: string,

    }


}