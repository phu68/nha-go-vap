(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","backgroundPreloadEnabled":true,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"definitions": [{"thumbnailUrl":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_t.jpg","partial":false,"hfovMin":"135%","overlays":["this.overlay_2F053491_3033_3F78_41C6_639861905D44"],"vfov":180,"id":"panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759","hfov":360,"label":trans('panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759.label'),"frames":[{"thumbnailUrl":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr2gen","rowCount":1,"height":2048,"colCount":6,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_0/{face}/vr2gen/0.jpg"}]}}],"adjacentPanoramas":[{"select":"this.overlay_2F053491_3033_3F78_41C6_639861905D44.get('areas').forEach(function(a){ a.trigger('click') })","distance":3.66,"yaw":-9.95,"backwardYaw":-77.15,"data":{"overlayID":"overlay_2F053491_3033_3F78_41C6_639861905D44"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33"}],"hfovMax":130,"data":{"label":"Tang 3 - Ngoai BBQ 2"},"pitch":0,"class":"Panorama"},{"thumbnailUrl":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_t.jpg","partial":false,"hfovMin":"135%","overlays":["this.overlay_2F947CA6_3032_EF58_419A_4A0BC5A4AC5C","this.overlay_2FE4AE61_3036_EBD8_4180_E346027B2128"],"vfov":180,"id":"panorama_2D33820B_3031_DB68_41A1_EE525495788C","hfov":360,"label":trans('panorama_2D33820B_3031_DB68_41A1_EE525495788C.label'),"frames":[{"thumbnailUrl":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr2gen","rowCount":1,"height":2048,"colCount":6,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2D33820B_3031_DB68_41A1_EE525495788C_0/{face}/vr2gen/0.jpg"}]}}],"adjacentPanoramas":[{"select":"this.overlay_2F947CA6_3032_EF58_419A_4A0BC5A4AC5C.get('areas').forEach(function(a){ a.trigger('click') })","distance":2.89,"yaw":-11.82,"backwardYaw":132.75,"data":{"overlayID":"overlay_2F947CA6_3032_EF58_419A_4A0BC5A4AC5C"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28E723_3031_3958_41B6_91530B189916"},{"select":"this.overlay_2FE4AE61_3036_EBD8_4180_E346027B2128.get('areas').forEach(function(a){ a.trigger('click') })","distance":4.09,"yaw":55.78,"backwardYaw":-165.01,"data":{"overlayID":"overlay_2FE4AE61_3036_EBD8_4180_E346027B2128"},"class":"AdjacentPanorama","panorama":"this.panorama_2C150D15_3031_2978_41BD_6202D433ECF2"}],"hfovMax":130,"data":{"label":"Tang 3 - Ngoai BBQ 5"},"pitch":0,"class":"Panorama"},{"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"height":"100%","playbackBarBorderRadius":0,"borderRadius":0,"paddingLeft":0,"progressBackgroundColorDirection":"vertical","playbackBarOpacity":1,"toolTipShadowBlurRadius":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBorderColor":"#000000","playbackBarHeadOpacity":1,"subtitlesShadow":false,"paddingRight":0,"progressBorderColor":"#000000","progressBorderRadius":0,"subtitlesPaddingTop":5,"toolTipFontSize":"1.11vmin","toolTipFontStyle":"normal","progressBarBackgroundColor":["#3399FF"],"translationTransitionDuration":1000,"subtitlesGap":0,"progressLeft":0,"subtitlesOpacity":1,"playbackBarBottom":5,"playbackBarHeadBorderRadius":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":3,"class":"ViewerArea","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","transitionMode":"blending","toolTipShadowOpacity":1,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressOpacity":1,"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"paddingTop":0,"subtitlesBorderSize":0,"toolTipTextShadowOpacity":0,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"paddingBottom":0,"minWidth":100,"progressBarOpacity":1,"toolTipDisplayTime":600,"subtitlesFontColor":"#FFFFFF","progressBottom":0,"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleOpacity":0.6,"vrPointerSelectionTime":2000,"playbackBarHeight":10,"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"propagateClick":false,"progressBackgroundOpacity":1,"progressBorderSize":0,"subtitlesFontWeight":"normal","progressHeight":10,"firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontFamily":"Arial","surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"subtitlesEnabled":true,"progressRight":0,"subtitlesPaddingLeft":5,"transitionDuration":500,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"progressOpacity":1,"progressBarBorderSize":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowSpread":0,"progressBarBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesBottom":50,"toolTipHorizontalAlign":"center","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadWidth":6,"subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"toolTipBorderRadius":3,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","subtitlesPaddingBottom":5,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"toolTipShadowVerticalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingTop":4,"id":"MainViewer","width":"100%","toolTipOpacity":1,"borderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBarBorderColor":"#000000","toolTipBorderSize":1,"shadow":false,"subtitlesTextDecoration":"none","toolTipBorderColor":"#767676","subtitlesTextShadowBlurRadius":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","data":{"name":"Main Viewer"}},{"id":"panorama_2C28E723_3031_3958_41B6_91530B189916_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_2C7CB3F0_3031_78B8_41C5_944423A3C296","automaticZoomSpeed":10},{"thumbnailUrl":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_t.jpg","partial":false,"hfovMin":"135%","overlays":["this.overlay_11FDD748_303F_F9E8_4197_50C31178378F","this.overlay_2FF662E6_303F_38D8_41B4_FD2050533A6E"],"vfov":180,"id":"panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33","hfov":360,"label":trans('panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33.label'),"frames":[{"thumbnailUrl":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr2gen","rowCount":1,"height":2048,"colCount":6,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_0/{face}/vr2gen/0.jpg"}]}}],"adjacentPanoramas":[{"select":"this.overlay_11FDD748_303F_F9E8_4197_50C31178378F.get('areas').forEach(function(a){ a.trigger('click') })","distance":2.44,"yaw":-77.15,"backwardYaw":-9.95,"data":{"overlayID":"overlay_11FDD748_303F_F9E8_4197_50C31178378F"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759"},{"select":"this.overlay_2FF662E6_303F_38D8_41B4_FD2050533A6E.get('areas').forEach(function(a){ a.trigger('click') })","distance":3.41,"yaw":-156.96,"backwardYaw":-57.44,"data":{"overlayID":"overlay_2FF662E6_303F_38D8_41B4_FD2050533A6E"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28E723_3031_3958_41B6_91530B189916"}],"hfovMax":130,"data":{"label":"Tang 3 - Ngoai BBQ 1"},"pitch":0,"class":"Panorama"},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation"},{"thumbnailUrl":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_t.jpg","partial":false,"hfovMin":"135%","overlays":["this.overlay_2FE4F698_3032_FB68_41C5_5F6841B9AEF9","this.overlay_11544664_3033_5BD8_419C_DC0137E94422"],"vfov":180,"id":"panorama_2C150D15_3031_2978_41BD_6202D433ECF2","hfov":360,"label":trans('panorama_2C150D15_3031_2978_41BD_6202D433ECF2.label'),"frames":[{"thumbnailUrl":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr2gen","rowCount":1,"height":2048,"colCount":6,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C150D15_3031_2978_41BD_6202D433ECF2_0/{face}/vr2gen/0.jpg"}]}}],"adjacentPanoramas":[{"select":"this.overlay_2FE4F698_3032_FB68_41C5_5F6841B9AEF9.get('areas').forEach(function(a){ a.trigger('click') })","distance":3.34,"yaw":-86.56,"backwardYaw":67.76,"data":{"overlayID":"overlay_2FE4F698_3032_FB68_41C5_5F6841B9AEF9"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28E723_3031_3958_41B6_91530B189916"},{"select":"this.overlay_11544664_3033_5BD8_419C_DC0137E94422.get('areas').forEach(function(a){ a.trigger('click') })","distance":3.97,"yaw":-165.01,"backwardYaw":55.78,"data":{"overlayID":"overlay_11544664_3033_5BD8_419C_DC0137E94422"},"class":"AdjacentPanorama","panorama":"this.panorama_2D33820B_3031_DB68_41A1_EE525495788C"}],"hfovMax":130,"data":{"label":"Tang 3 - Ngoai BBQ 4"},"pitch":0,"class":"Panorama"},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_2D33820B_3031_DB68_41A1_EE525495788C","camera":"this.panorama_2D33820B_3031_DB68_41A1_EE525495788C_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_2C150D15_3031_2978_41BD_6202D433ECF2","camera":"this.panorama_2C150D15_3031_2978_41BD_6202D433ECF2_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_2C28E723_3031_3958_41B6_91530B189916","camera":"this.panorama_2C28E723_3031_3958_41B6_91530B189916_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759","camera":"this.panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33","camera":"this.panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}]},{"id":"panorama_2C28E0CC_3031_58E8_41C1_0E4B5993D759_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_2C7C53F0_3031_78B8_41B3_A34603D02964","automaticZoomSpeed":10},{"id":"panorama_2C150D15_3031_2978_41BD_6202D433ECF2_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_2C7C93F0_3031_78B8_41A3_194F6F4C4C88","automaticZoomSpeed":10},{"id":"panorama_2D33820B_3031_DB68_41A1_EE525495788C_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_2C0943EF_3031_78A8_4199_02AD0B0188CF","automaticZoomSpeed":10},{"id":"panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_2C7C63F0_3031_78B8_41C4_43316C7D3479","automaticZoomSpeed":10},{"thumbnailUrl":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_t.jpg","partial":false,"hfovMin":"135%","overlays":["this.overlay_2FF1D2E5_303F_38D8_41B5_5C3E749149D1","this.overlay_2FDE7699_3032_FB68_4168_95E8A0AA2974","this.overlay_2F92FCA5_3032_EF58_41B6_2102A60C6386"],"vfov":180,"id":"panorama_2C28E723_3031_3958_41B6_91530B189916","hfov":360,"label":trans('panorama_2C28E723_3031_3958_41B6_91530B189916.label'),"frames":[{"thumbnailUrl":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr2gen","rowCount":1,"height":2048,"colCount":6,"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_2C28E723_3031_3958_41B6_91530B189916_0/{face}/vr2gen/0.jpg"}]}}],"adjacentPanoramas":[{"select":"this.overlay_2FF1D2E5_303F_38D8_41B5_5C3E749149D1.get('areas').forEach(function(a){ a.trigger('click') })","distance":4.66,"yaw":-57.44,"backwardYaw":-156.96,"data":{"overlayID":"overlay_2FF1D2E5_303F_38D8_41B5_5C3E749149D1"},"class":"AdjacentPanorama","panorama":"this.panorama_2C28CA52_3031_6BF8_41C1_B3C94FDD1A33"},{"select":"this.overlay_2FDE7699_3032_FB68_4168_95E8A0AA2974.get('areas').forEach(function(a){ a.trigger('click') })","distance":11.02,"yaw":67.76,"backwardYaw":-86.56,"data":{"overlayID":"overlay_2FDE7699_3032_FB68_4168_95E8A0AA2974"},"class":"AdjacentPanorama","panorama":"this.panorama_2C150D15_3031_2978_41BD_6202D433ECF2"},{"select":"this.overlay_2F92FCA5_3032_EF58_41B6_2102A60C6386.get('areas').forEach(function(a){ a.trigger('click') })","distance":10.61,"yaw":132.75,"backwardYaw":-11.82,"data":{"overlayID":"overlay_2F92FCA5_3032_EF58_41B6_2102A60C6386"},"class":"AdjacentPanorama","panorama":"this.panorama_2D33820B_3031_DB68_41A1_EE525495788C"}],"hfovMax":130,"data":{"label":"Tang 3 - Ngoai BBQ 3"},"pitch":0,"class":"Panorama"},{"id":"overlay_2F053491_3033_3F78_41C6_639861905D44","maps":[],"areas":["this.HotspotPanoramaOverlayArea_2F6B449B_3033_3F68_41C1_EEC183D497ED"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq1"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-9.95,"pitch":-24.91,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq1"},"image":"this.AnimatedImageResource_11554692_3031_3B78_41BD_D72A6FB87F77","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2F947CA6_3032_EF58_419A_4A0BC5A4AC5C","maps":[],"areas":["this.HotspotPanoramaOverlayArea_104FF6FC_3031_58A8_41A3_9E334186BCF8"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq3"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-11.82,"pitch":-30.46,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq3"},"image":"this.AnimatedImageResource_11562692_3031_3B78_41C3_8E1BD0380294","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2FE4AE61_3036_EBD8_4180_E346027B2128","maps":[],"areas":["this.HotspotPanoramaOverlayArea_2FC9AE64_3036_EBD8_41A1_A111C936B6B1"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq4"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":55.78,"pitch":-22.56,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq4"},"image":"this.AnimatedImageResource_11560692_3031_3B78_41C1_862A8F494CBC","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"sequence_2C7CB3F0_3031_78B8_41C5_944423A3C296","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"overlay_11FDD748_303F_F9E8_4197_50C31178378F","maps":[],"areas":["this.HotspotPanoramaOverlayArea_11EF774E_303F_F9E9_41AE_28BB97594F54"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq2"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-77.15,"pitch":-34.83,"rotationX":40.35,"distance":100,"verticalAlign":"middle","vfov":6.83,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq2"},"image":"this.AnimatedImageResource_11559692_3031_3B78_41AF_D6698197B80E","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2FF662E6_303F_38D8_41B4_FD2050533A6E","maps":[],"areas":["this.HotspotPanoramaOverlayArea_1061464C_303E_FBE8_41BF_BC9992EA796C"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq3"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-156.96,"pitch":-26.51,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq3"},"image":"this.AnimatedImageResource_1155D692_3031_3B78_41C3_957A5C49794F","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2FE4F698_3032_FB68_41C5_5F6841B9AEF9","maps":[],"areas":["this.HotspotPanoramaOverlayArea_2FCBD69E_3032_FB68_41C1_E27F4C895BB5"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq3"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-86.56,"pitch":-26.96,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq3"},"image":"this.AnimatedImageResource_1156B692_3031_3B78_41B5_E8B203A08167","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_11544664_3033_5BD8_419C_DC0137E94422","maps":[],"areas":["this.HotspotPanoramaOverlayArea_11552665_3033_5BD8_41B3_A1200BA9EFD7"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq5"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-165.01,"pitch":-23.16,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq5"},"image":"this.AnimatedImageResource_11569692_3031_3B78_41B3_7A0188DF57A7","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"sequence_2C7C53F0_3031_78B8_41B3_A34603D02964","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"sequence_2C7C93F0_3031_78B8_41A3_194F6F4C4C88","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"sequence_2C0943EF_3031_78A8_4199_02AD0B0188CF","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"sequence_2C7C63F0_3031_78B8_41C4_43316C7D3479","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"overlay_2FF1D2E5_303F_38D8_41B5_5C3E749149D1","maps":[],"areas":["this.HotspotPanoramaOverlayArea_2FED82EA_303F_38A8_41B1_ECD3C80717DC"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq1"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-57.44,"pitch":-20.05,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq1"},"image":"this.AnimatedImageResource_1156E692_3031_3B78_41B2_FE2886D17141","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2FDE7699_3032_FB68_4168_95E8A0AA2974","maps":[],"areas":["this.HotspotPanoramaOverlayArea_1062DB92_3033_2978_41C1_96E1C868E515"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq4"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":67.76,"pitch":-8.76,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq4"},"image":"this.AnimatedImageResource_11553692_3031_3B78_41B8_DBB1FB359250","hfov":10.5,"scaleMode":"fit_inside"}]},{"id":"overlay_2F92FCA5_3032_EF58_41B6_2102A60C6386","maps":[],"areas":["this.HotspotPanoramaOverlayArea_2F87ECAB_3032_E8A8_41A1_B9E5109B17D9"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToTang3-NgoaiBbq5"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":132.75,"pitch":-9.1,"distance":100,"verticalAlign":"middle","vfov":2.94,"horizontalAlign":"center","data":{"label":"GoToTang3-NgoaiBbq5"},"image":"this.AnimatedImageResource_11550692_3031_3B78_41A8_82460FD2406A","hfov":10.5,"scaleMode":"fit_inside"}]},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2F6B449B_3033_3F68_41C1_EEC183D497ED","click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11554692_3031_3B78_41BD_D72A6FB87F77","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_104FF6FC_3031_58A8_41A3_9E334186BCF8","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11562692_3031_3B78_41C3_8E1BD0380294","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2FC9AE64_3036_EBD8_41A1_A111C936B6B1","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11560692_3031_3B78_41C1_862A8F494CBC","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_11EF774E_303F_F9E9_41AE_28BB97594F54","click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":20,"levels":[{"url":"media/res_11964BB5_3031_68B8_41AB_9455BFEBE94C_0.png","class":"ImageResourceLevel","height":111,"width":5000}],"id":"AnimatedImageResource_11559692_3031_3B78_41AF_D6698197B80E","frameDuration":41,"colCount":20},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1061464C_303E_FBE8_41BF_BC9992EA796C","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_1155D692_3031_3B78_41C3_957A5C49794F","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2FCBD69E_3032_FB68_41C1_E27F4C895BB5","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_1156B692_3031_3B78_41B5_E8B203A08167","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_11552665_3033_5BD8_41B3_A1200BA9EFD7","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11569692_3031_3B78_41B3_7A0188DF57A7","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2FED82EA_303F_38A8_41B1_ECD3C80717DC","click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_1156E692_3031_3B78_41B2_FE2886D17141","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1062DB92_3033_2978_41C1_96E1C868E515","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11553692_3031_3B78_41B8_DBB1FB359250","frameDuration":41,"colCount":22},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2F87ECAB_3032_E8A8_41A1_B9E5109B17D9","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any"},{"class":"AnimatedImageResource","rowCount":1,"frameCount":22,"levels":[{"url":"media/res_11973BB5_3031_68B8_41BF_4CC95F41B3ED_0.png","class":"ImageResourceLevel","height":70,"width":5500}],"id":"AnimatedImageResource_11550692_3031_3B78_41A8_82460FD2406A","frameDuration":41,"colCount":22}],"borderRadius":0,"paddingLeft":0,"backgroundColorRatios":[0],"paddingRight":0,"backgroundColorDirection":"vertical","scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cloneBindings":TDV.Tour.Script.cloneBindings,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizStart":TDV.Tour.Script.quizStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initQuiz":TDV.Tour.Script.initQuiz,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPixels":TDV.Tour.Script.getPixels,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playAudioList":TDV.Tour.Script.playAudioList,"downloadFile":TDV.Tour.Script.downloadFile,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"isPanorama":TDV.Tour.Script.isPanorama,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"translate":TDV.Tour.Script.translate,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios},"scrollBarWidth":10,"class":"Player","mouseWheelEnabled":true,"layout":"absolute","downloadEnabled":false,"toolTipHorizontalAlign":"center","overflow":"hidden","desktopMipmappingEnabled":false,"width":"100%","contentOpaque":false,"backgroundColor":["#FFFFFF"],"paddingTop":0,"children":["this.MainViewer"],"minHeight":0,"id":"rootPlayer","paddingBottom":0,"minWidth":0,"borderSize":0,"gap":10,"vrPolyfillScale":0.75,"shadow":false,"defaultVRPointer":"laser","mediaActivationMode":"window","scrollBarColor":"#000000","mobileMipmappingEnabled":false,"verticalAlign":"top","backgroundOpacity":1,"data":{"locales":{"en":"locale/en.txt"},"name":"Player4425","textToSpeechConfig":{"rate":1,"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false},"defaultLocale":"en"},"scrollBarMargin":2,"horizontalAlign":"left","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Tue Dec 20 2022