var rule = {
    title:'Missav',
    host:'https://missav.ws',
	searchUrl:'/cn/search/**',
    url:'/cn/fyclass?page=fypage',
    headers:{
        'User-Agent':'PostmanRuntime/7.37.3'
    },
    timeout:5000,
    class_name:'最近更新&新作上市&无码流出&SIRO&LUXU&GANA&PRESTIGE&S-CUTE&ARA&FC2&麻豆传媒&本月热门',//静态分类名称拼接
    class_url:'new&release&uncensored-leak&siro&luxu&gana&maan&scute&ara&fc2&madou&monthly-hot',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    // 推荐:".grid.grid-cols-2.gap-5&&.thumbnail.group;.relative.aspect-w-16&&a&&img&&alt;.relative.aspect-w-16&&a&&img&&data-src;.absolute.bottom-1&&Text;a&&href",
    一级:'.grid.grid-cols-2.gap-5&&.thumbnail.group;.relative.aspect-w-16&&a&&img&&alt;.relative.aspect-w-16&&a&&img&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.grid.grid-cols-2.gap-5&&.thumbnail.group;.relative.aspect-w-16&&a&&img&&alt;.relative.aspect-w-16&&a&&img&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}

