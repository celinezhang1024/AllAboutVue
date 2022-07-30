export interface ChinaTotal {
	localConfirmAdd: number;
	nowConfirm: number;
	localConfirm: number;
	dead: number;
	noInfectH5: number;
	local_acc_confirm: number;
	mtime: string;
	confirmAdd: number;
	deadAdd: number;
	mediumRiskAreaNum: number;
	nowSevere: number;
	importedCase: number;
	noInfect: number;
	showlocalinfeciton: number;
	localWzzAdd: number;
	nowLocalWzz: number;
	highRiskAreaNum: number;
	confirm: number;
	heal: number;
	suspect: number;
	localConfirmH5: number;
	showLocalConfirm: number;
	mRiskTime: string;
}

export interface ChinaAdd {
	nowSevere: number;
	importedCase: number;
	noInfectH5: number;
	localConfirmH5: number;
	nowConfirm: number;
	heal: number;
	dead: number;
	suspect: number;
	noInfect: number;
	localConfirm: number;
	confirm: number;
}

export interface ShowAddSwitch {
	confirm: boolean;
	suspect: boolean;
	dead: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	all: boolean;
	localinfeciton: boolean;
	importedCase: boolean;
	heal: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	dead: number;
	highRiskAreaNum: number;
	provinceLocalConfirm: number;
	nowConfirm: number;
	showHeal: boolean;
	wzz: number;
	heal: number;
	mediumRiskAreaNum: number;
	mtime: string;
	showRate: boolean;
	adcode: string;
}

export interface Total {
	mediumRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	dead: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	nowConfirm: number;
	showRate: boolean;
	confirm: number;
	showHeal: boolean;
	wzz: number;
	mtime: string;
	heal: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	nowConfirm: number;
	showHeal: boolean;
	adcode: string;
	dead: number;
	heal: number;
	confirm: number;
	showRate: boolean;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	name: string;
	adcode: string;
}

export interface Today {
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Children {
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
	today: Today;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
	confirmAdd: number;
	confirm: number;
	dead: number;
	heal: number;
	date: string;
	sdate: string;
	province: string;
	nowConfirm: number;
	mtime: string;
	syear: number;
	wzz_add: string;
	city: string;
	grade: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}