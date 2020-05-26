module kelvin.texas {
    export class MatchConfig {
        /** 比赛id */
        public id;
        /** 比赛种类(1-普通比赛 2-wcaa) */
        public type1 = 1;
        /** 比赛类型(1-sng 2-mtt) */
        public type;
        /** 名字 */
        public name;
        /** 门票所需金币 */
        public apply_gold;
        /** 门票所需积分 */
        public apply_score;
        /** 报名开始日期 */
        public apply_date;
        /** 报名结束日期 */
        public apply_date_end;
        /** 报名时间 */
        public apply_time;
        /** 报名结束时间 */
        public apply_time_end;
        /** 延迟报名时间（秒） */
        public apply_delay_time;
        /** 报名截止盲注等级 */
        public apply_max_mz_level;
        /** 最大报名人数 */
        public apply_max_people;
        /** 盲注表 */
        public mz_table_id;
        /** 涨盲时间 */
        public mz_interval;
        /** 可买入次数 */
        public buy_count;
        /** 单个玩家可买入次数 */
        public player_buy_count = 5;
        /** 保底奖励 */
        public min_reward;
        /** 金币转换比例（入池分数） */
        public reward_val;
        /** 每一桌的最大人数 */
        public table_people = 9;
        /** 初始计分牌 */
        public init_game_score;
        /** 牌力分占比 */
        public poker_score_rate = 0.3;
        /** 报名人数不满足 作废 */
        public stop_people;
        /** 在线人数不满足 作废 */
        public stop_online_people;
        /** 休息间隔 -1 表示不休息*/
        public break_interval = -1;
        /** 休息时长 */
        public break_time_long = 0;
        /** 比赛开始日期 */
        public start_date;
        /** 比赛开始时间 */
        public start_time;
        /** 场馆系数 */
        public stage_rate = 1;
        /** 服务费-金币 */
        public service_gold = 0;
        /** 服务费-积分 */
        public service_score = 0;
        /** 思考时间 */
        public think_time = 30;
        /** 奖励类型 1-积分 2-金币 */
        public reward_type = 1;
        /** 门票配置 id */
        public ticket_cfgId = -1;


        /** 当前报名人数 */
        public people = 0;
        /** 当前奖池 */
        public reward = 0;
        /** 已经分发的牌力分 */
        public reward_poker_score = 0;
        /** 当前买入次数 */
        public cur_buy_count = 0;
        /** 开始时间戳 */
        public match_start_time = 0;
        /** uuid */
        public uuid;
        /** 当前盲注等级 */
        public mz_level = 1;
        /** 比赛状态(0报名中，1进行中，2休息中) */
        public state = 0;
        /** 休息次数 */
        public break_count = 0;
        /** 上一次休息结束的时间 */
        public last_break_end_time = 0;
        /** 等待休息的房间数量 */
        public break_room_count = 0;
        /** 休息的开始时间 */
        public break_start_time = -1;
        /** 进入休息状态的时间戳 */
        public break_state_time = -1;
        /** 总共休息的时常 */
        public break_total_time = 0;
        /**当前被淘汰的人 */
        public over_people = 0;


        /** 桌号 */
        public cur_table_num = 0;
        /** 钱圈 */  //0是没有 1是有
        public inMoneyCircle = 0

        /** 大师分 id */
        public master_points_id = -1;

        /**标题id */
        public title_id = 0;

        /** 循环赛 1是 0否 */
        public satellite = 0;

    }
    // match_state_wait = 0;//未开始 
    // match_state_game = 1;//进行中
    // match_state_reset = 2;//休息中
    // match_state_fail = 4; //比赛开启失败
    // match_state_stop = 5;//人为终止比赛 
    // match_state_over = 6;//比赛结束
}