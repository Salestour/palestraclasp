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
var script = {"start":"this.init()","toolTipHorizontalAlign":"center","paddingTop":0,"scripts":{"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"initAnalytics":TDV.Tour.Script.initAnalytics,"isPanorama":TDV.Tour.Script.isPanorama,"getMainViewer":TDV.Tour.Script.getMainViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"mixObject":TDV.Tour.Script.mixObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizShowScore":TDV.Tour.Script.quizShowScore,"existsKey":TDV.Tour.Script.existsKey,"setValue":TDV.Tour.Script.setValue,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setLocale":TDV.Tour.Script.setLocale,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizStart":TDV.Tour.Script.quizStart,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"scrollBarOpacity":0.5,"borderRadius":0,"width":"100%","desktopMipmappingEnabled":false,"contentOpaque":false,"backgroundColorDirection":"vertical","scrollBarColor":"#000000","mediaActivationMode":"window","id":"rootPlayer","paddingLeft":0,"paddingBottom":0,"verticalAlign":"top","vrPolyfillScale":0.75,"mouseWheelEnabled":true,"paddingRight":0,"overflow":"hidden","horizontalAlign":"left","propagateClick":false,"definitions": [{"toolTipTextShadowColor":"#000000","toolTipOpacity":1,"toolTipHorizontalAlign":"center","progressBorderRadius":0,"subtitlesBottom":50,"playbackBarRight":0,"width":"100%","playbackBarBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"subtitlesPaddingLeft":5,"displayTooltipInSurfaceSelection":true,"id":"MainViewer","paddingLeft":0,"toolTipBackgroundColor":"#F6F6F6","translationTransitionDuration":1000,"paddingRight":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipPaddingTop":4,"toolTipBorderSize":1,"progressLeft":0,"subtitlesFontFamily":"Arial","progressBorderColor":"#000000","subtitlesEnabled":true,"playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"height":"100%","subtitlesPaddingTop":5,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundOpacity":1,"toolTipShadowSpread":0,"toolTipTextShadowBlurRadius":3,"toolTipDisplayTime":600,"transitionDuration":500,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"class":"ViewerArea","playbackBarLeft":0,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"borderSize":0,"toolTipPaddingRight":6,"firstTransitionDuration":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarOpacity":1,"playbackBarHeadBorderSize":0,"toolTipShadowOpacity":1,"minWidth":100,"progressBottom":0,"surfaceReticleOpacity":0.6,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"paddingTop":0,"progressHeight":10,"subtitlesTextShadowColor":"#000000","minHeight":50,"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","borderRadius":0,"doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingBottom":0,"toolTipFontFamily":"Arial","playbackBarBorderRadius":0,"progressBarBorderSize":0,"progressBorderSize":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarOpacity":1,"vrPointerSelectionColor":"#FF6600","progressBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarBottom":5,"subtitlesGap":0,"surfaceReticleColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipShadowBlurRadius":3,"subtitlesShadow":false,"progressRight":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","progressOpacity":1,"toolTipFontColor":"#606060","displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","subtitlesFontSize":"3vmin","propagateClick":false,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"surfaceReticleSelectionOpacity":1,"subtitlesBorderSize":0,"playbackBarProgressOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"toolTipFontStyle":"normal","progressBarBorderColor":"#000000","subtitlesOpacity":1,"progressBarBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"playbackBarHeadBorderColor":"#000000","progressBackgroundColorDirection":"vertical","transitionMode":"blending","subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"subtitlesFontWeight":"normal","subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowHorizontalLength":0,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","shadow":false,"playbackBarHeadWidth":6,"toolTipShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"toolTipFontSize":"1.11vmin"},{"initialSequence":"this.sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera"},{"titlePaddingTop":5,"toolTipHorizontalAlign":"center","shadowHorizontalLength":3,"headerVerticalAlign":"middle","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerBorderColor":"#000000","width":"90%","closeButtonPaddingRight":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"footerBackgroundOpacity":0,"headerPaddingRight":0,"backgroundColorDirection":"vertical","titlePaddingLeft":5,"id":"window_569DAA08_4442_6579_41C1_541231190E14","shadowColor":"#000000","headerPaddingLeft":10,"paddingRight":0,"closeButtonIconColor":"#B2B2B2","paddingLeft":0,"bodyBorderSize":0,"headerBorderColor":"#000000","modal":true,"overflow":"scroll","shadowSpread":1,"footerHeight":5,"closeButtonBorderColor":"#000000","closeButtonPaddingLeft":0,"height":"90%","bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","layout":"vertical","backgroundOpacity":1,"backgroundColor":[],"bodyBorderColor":"#000000","closeButtonBackgroundColor":[],"titleFontColor":"#000000","titleFontStyle":"normal","veilColorRatios":[0,1],"closeButtonPaddingBottom":0,"class":"Window","borderSize":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"gap":10,"scrollBarVisible":"rollOver","titleTextDecoration":"none","closeButtonIconWidth":20,"headerBackgroundColorRatios":[0,0.1,1],"minHeight":0,"bodyPaddingTop":0,"closeButtonPressedBorderSize":0,"closeButtonPaddingTop":0,"minWidth":0,"titlePaddingRight":5,"headerBorderSize":0,"closeButtonBorderRadius":11,"titleFontWeight":"normal","bodyPaddingBottom":0,"closeButtonRollOverBackgroundOpacity":0,"paddingTop":0,"footerBackgroundColorRatios":[0,0.9,1],"veilColorDirection":"horizontal","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"shadowBlurRadius":6,"borderRadius":5,"paddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"contentOpaque":false,"closeButtonBorderSize":0,"scrollBarColor":"#000000","headerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundColor":[],"footerBackgroundColorDirection":"vertical","headerBackgroundOpacity":0,"children":["this.WebFrame_526B8F9B_5EBA_E363_41CF_E94EBC8FD520"],"closeButtonRollOverIconLineWidth":2,"verticalAlign":"middle","closeButtonPressedIconLineWidth":3,"bodyBackgroundColorDirection":"vertical","horizontalAlign":"center","shadowVerticalLength":0,"bodyBackgroundOpacity":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBackgroundColorRatios":[],"closeButtonPressedIconColor":"#FFFFFF","propagateClick":false,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonBackgroundOpacity":0,"closeButtonPressedBackgroundColor":[],"veilOpacity":0.4,"footerBorderSize":0,"titlePaddingBottom":5,"titleFontSize":"1.29vmin","backgroundColorRatios":[],"veilColor":["#000000","#000000"],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"scrollBarWidth":10,"closeButtonPressedBackgroundOpacity":0,"titleHorizontalAlign":"left","closeButtonRollOverBackgroundColorRatios":[],"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonRollOverBorderColor":"#000000","closeButtonIconHeight":20,"headerPaddingTop":10,"shadowOpacity":0.5,"closeButtonRollOverBorderSize":0,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"shadow":true,"bodyPaddingRight":0,"closeButtonPressedBorderColor":"#000000","titleFontFamily":"Arial","scrollBarOpacity":0.5,"data":{"name":"Window17677"}},{"hfov":360,"hfovMin":"135%","partial":false,"overlays":["this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0","this.overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802","this.overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492","this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"],"adjacentPanoramas":[{"distance":8.98,"yaw":-103.31,"class":"AdjacentPanorama","data":{"overlayID":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},"panorama":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","select":"this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"data":{"label":"CLASPF2"},"pitch":0,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","class":"Panorama","label":trans('panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF.label'),"frames":[{"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":"ondemand"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr/0.jpg","rowCount":1,"tags":"mobilevr"},{"width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr2gen/0.jpg","rowCount":1,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","vfov":180},{"class":"PanoramaPlayer","viewerArea":"this.MainViewer","zoomEnabled":true,"aaEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"titlePaddingTop":5,"toolTipHorizontalAlign":"center","shadowHorizontalLength":3,"headerVerticalAlign":"middle","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerBorderColor":"#000000","width":"90%","closeButtonPaddingRight":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"footerBackgroundOpacity":0,"headerPaddingRight":0,"backgroundColorDirection":"vertical","titlePaddingLeft":5,"id":"window_52347E08_43CE_9D79_41A0_D0956BAE2C15","shadowColor":"#000000","headerPaddingLeft":10,"paddingRight":0,"closeButtonIconColor":"#B2B2B2","paddingLeft":0,"bodyBorderSize":0,"headerBorderColor":"#000000","modal":true,"overflow":"scroll","shadowSpread":1,"footerHeight":5,"closeButtonBorderColor":"#000000","closeButtonPaddingLeft":0,"height":"90%","bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","layout":"vertical","backgroundOpacity":1,"backgroundColor":[],"bodyBorderColor":"#000000","closeButtonBackgroundColor":[],"titleFontColor":"#000000","titleFontStyle":"normal","veilColorRatios":[0,1],"closeButtonPaddingBottom":0,"class":"Window","borderSize":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"gap":10,"scrollBarVisible":"rollOver","titleTextDecoration":"none","closeButtonIconWidth":20,"headerBackgroundColorRatios":[0,0.1,1],"minHeight":0,"bodyPaddingTop":0,"closeButtonPressedBorderSize":0,"closeButtonPaddingTop":0,"minWidth":0,"titlePaddingRight":5,"headerBorderSize":0,"closeButtonBorderRadius":11,"titleFontWeight":"normal","bodyPaddingBottom":0,"closeButtonRollOverBackgroundOpacity":0,"paddingTop":0,"footerBackgroundColorRatios":[0,0.9,1],"veilColorDirection":"horizontal","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"shadowBlurRadius":6,"borderRadius":5,"paddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"contentOpaque":false,"closeButtonBorderSize":0,"scrollBarColor":"#000000","headerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundColor":[],"footerBackgroundColorDirection":"vertical","headerBackgroundOpacity":0,"children":["this.WebFrame_52695F94_5EBA_E365_41A4_DDC4F12B1B35"],"closeButtonRollOverIconLineWidth":2,"verticalAlign":"middle","closeButtonPressedIconLineWidth":3,"bodyBackgroundColorDirection":"vertical","horizontalAlign":"center","shadowVerticalLength":0,"bodyBackgroundOpacity":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBackgroundColorRatios":[],"closeButtonPressedIconColor":"#FFFFFF","propagateClick":false,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonBackgroundOpacity":0,"closeButtonPressedBackgroundColor":[],"veilOpacity":0.4,"footerBorderSize":0,"titlePaddingBottom":5,"titleFontSize":"1.29vmin","backgroundColorRatios":[],"veilColor":["#000000","#000000"],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"scrollBarWidth":10,"closeButtonPressedBackgroundOpacity":0,"titleHorizontalAlign":"left","closeButtonRollOverBackgroundColorRatios":[],"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonRollOverBorderColor":"#000000","closeButtonIconHeight":20,"headerPaddingTop":10,"shadowOpacity":0.5,"closeButtonRollOverBorderSize":0,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"shadow":true,"bodyPaddingRight":0,"closeButtonPressedBorderColor":"#000000","titleFontFamily":"Arial","scrollBarOpacity":0.5,"data":{"name":"Window15720"}},{"items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_52796F3A_5EBA_E3AD_41C7_3B69451D27AF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_52796F3A_5EBA_E3AD_41C7_3B69451D27AF, 0)"}],"class":"PlayList","id":"playList_52796F3A_5EBA_E3AD_41C7_3B69451D27AF"},{"items":["this.PanoramaPlayListItem_526BDF9B_5EBA_E363_41CE_68ADB195E2B2",{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera","class":"PanoramaPlayListItem","media":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"hfov":360,"hfovMin":"135%","partial":false,"overlays":["this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0","this.overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6","this.overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E","this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4","this.overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30","this.overlay_513C249E_43C1_EE99_418D_09D947757AF4"],"adjacentPanoramas":[{"distance":6.12,"yaw":-104.43,"class":"AdjacentPanorama","data":{"overlayID":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},"panorama":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","select":"this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"data":{"label":"CLASP F1 "},"pitch":0,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","class":"Panorama","label":trans('panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94.label'),"frames":[{"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":"ondemand"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr/0.jpg","rowCount":1,"tags":"mobilevr"},{"width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr2gen/0.jpg","rowCount":1,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","vfov":180},{"initialSequence":"this.sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera"},{"displayPlayOverlay":true,"class":"VideoPlayer","displayPlaybackBar":true,"id":"MainViewerVideoPlayer","viewerArea":"this.MainViewer","clickAction":"play_pause"},{"items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_520854B5_43C2_EEAB_41B4_4DF8B133433B","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_52798F3A_5EBA_E3AD_41C4_1629A95C41F3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_52798F3A_5EBA_E3AD_41C4_1629A95C41F3, 0)"}],"class":"PlayList","id":"playList_52798F3A_5EBA_E3AD_41C4_1629A95C41F3"},{"video":"this.videores_531635CF_43CE_6EF7_41CD_260824DEF4CB","loop":false,"height":1920,"thumbnailUrl":"media/video_5242A95A_43C2_A799_41C2_73D20BB9E1BE_t.jpg","scaleMode":"fit_inside","width":3840,"id":"video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","class":"Video","label":trans('video_5242A95A_43C2_A799_41C2_73D20BB9E1BE.label'),"data":{"label":"CLASP 360"}},{"video":"this.videores_52490E65_43C1_FDAB_41D0_9F6080575776","loop":false,"height":1920,"thumbnailUrl":"media/video_520854B5_43C2_EEAB_41B4_4DF8B133433B_t.jpg","scaleMode":"fit_inside","width":3840,"id":"video_520854B5_43C2_EEAB_41B4_4DF8B133433B","class":"Video","label":trans('video_520854B5_43C2_EEAB_41B4_4DF8B133433B.label'),"data":{"label":"CLASP 360"}},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"id":"sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8"},{"toolTipHorizontalAlign":"center","paddingTop":0,"borderRadius":0,"width":"100%","url":trans('WebFrame_526B8F9B_5EBA_E363_41CF_E94EBC8FD520.url'),"backgroundColorDirection":"vertical","id":"WebFrame_526B8F9B_5EBA_E363_41CF_E94EBC8FD520","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"propagateClick":false,"height":"100%","backgroundColor":[],"backgroundOpacity":1,"scrollEnabled":true,"backgroundColorRatios":[],"insetBorder":false,"borderSize":0,"class":"WebFrame","minWidth":0,"shadow":false,"minHeight":0,"data":{"name":"WebFrame1804"}},{"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","distance":50,"inertia":false,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"rotate":false,"hfov":45,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"],"items":[{"image":"this.AnimatedImageResource_52786EB9_5EBA_E2AF_41C8_8B926A1015B9","distance":100,"yaw":171.06,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Info Red 02"},"hfov":16.74,"vfov":17.2,"pitch":-19.15,"scaleMode":"fit_inside"}],"data":{"label":"Info Red 02"},"id":"overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"],"items":[{"image":"this.res_574BFD98_4442_9E99_41C8_4DA5752EED88","distance":50,"yaw":109.82,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Image"},"hfov":10.5,"vfov":10.5,"pitch":8.49,"scaleMode":"fit_inside"}],"data":{"label":"Image"},"id":"overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 04b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"],"items":[{"image":"this.AnimatedImageResource_5279AEBB_5EBA_E2A3_41CF_E893C9196729","distance":100,"yaw":-103.31,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Arrow 04b"},"hfov":21.66,"vfov":21.9,"pitch":-10.71,"scaleMode":"fit_inside"}],"id":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},{"toolTipHorizontalAlign":"center","paddingTop":0,"borderRadius":0,"width":"100%","url":trans('WebFrame_52695F94_5EBA_E365_41A4_DDC4F12B1B35.url'),"backgroundColorDirection":"vertical","id":"WebFrame_52695F94_5EBA_E365_41A4_DDC4F12B1B35","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"propagateClick":false,"height":"100%","backgroundColor":[],"backgroundOpacity":1,"scrollEnabled":true,"backgroundColorRatios":[],"insetBorder":false,"borderSize":0,"class":"WebFrame","minWidth":0,"shadow":false,"minHeight":0,"data":{"name":"WebFrame1803"}},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera","class":"PanoramaPlayListItem","media":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","id":"PanoramaPlayListItem_526BDF9B_5EBA_E363_41CE_68ADB195E2B2","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","distance":50,"inertia":false,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"rotate":false,"hfov":45,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"],"items":[{"image":"this.res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC","distance":50,"yaw":124.28,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"large-removebg-preview"},"hfov":13.31,"vfov":12.6,"pitch":-22.16,"scaleMode":"fit_inside"}],"data":{"label":"large-removebg-preview"},"id":"overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"],"items":[{"image":"this.AnimatedImageResource_52067EB3_5EBA_E2A3_41D6_D345EBA183DB","distance":50,"yaw":122.12,"class":"HotspotPanoramaOverlayImage","rotationY":-8.15,"horizontalAlign":"center","roll":0.06,"rotationX":4.38,"verticalAlign":"middle","data":{"label":"CLIQUE"},"hfov":11.68,"vfov":14.46,"pitch":-17.23,"scaleMode":"fit_inside"}],"data":{"label":"CLIQUE"},"id":"overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 04b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"],"items":[{"image":"this.AnimatedImageResource_5206DEB6_5EBA_E2A5_41CB_6A4DAAFD5D19","distance":100,"yaw":-104.43,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Arrow 04b"},"hfov":25.41,"vfov":25.16,"pitch":-15.51,"scaleMode":"fit_inside"}],"id":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"],"items":[{"image":{"class":"ImageResource","levels":[{"height":364,"width":334,"class":"ImageResourceLevel","url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_HS_jrpvywis.png"}]},"distance":50,"yaw":-70.71,"class":"HotspotPanoramaOverlayImage","hfov":19.64,"pitch":-48.8,"vfov":21.31,"data":{"label":"Poligono"}}],"data":{"label":"Poligono"},"id":"overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"],"items":[{"image":"this.AnimatedImageResource_52071EB7_5EBA_E2A3_41D2_34E030154CE0","distance":50,"yaw":-82.41,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"CLIQUE"},"hfov":8.55,"vfov":15.61,"pitch":-42.31,"scaleMode":"fit_inside"}],"data":{"label":"CLIQUE"},"id":"overlay_513C249E_43C1_EE99_418D_09D947757AF4"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"id":"sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD"},{"height":1920,"width":3840,"levels":["this.videolevel_523F0D90_5EBA_E77D_41B8_E337AAB0F53E","this.videolevel_523F0DA8_5EBA_E6AE_41D5_01742DA1C3F2"],"class":"VideoResource","id":"videores_531635CF_43CE_6EF7_41CD_260824DEF4CB"},{"height":1920,"width":3840,"levels":["this.videolevel_5231ADFD_5EBA_E6A7_41B5_CF5BC0455EF2","this.videolevel_5231DDFD_5EBA_E6A7_41A2_3D30C1E6EACA"],"class":"VideoResource","id":"videores_52490E65_43C1_FDAB_41D0_9F6080575776"},{"id":"res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","class":"ImageResource","levels":[{"height":1024,"width":1024,"class":"ImageResourceLevel","url":"media/res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE_0.png"}]},{"id":"HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51","click":"this.openLink(this.translate('LinkBehaviour_5339FA5C_43C2_A599_41D0_A9D6E8603133.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":1020,"width":680,"class":"ImageResourceLevel","url":"media/res_52E001A5_43C1_A6AB_419F_09F478331FF8_0.png"}],"frameDuration":41,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"rowCount":6,"id":"AnimatedImageResource_52786EB9_5EBA_E2AF_41C8_8B926A1015B9"},{"id":"HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3","click":"this.WebFrame_526B8F9B_5EBA_E363_41CF_E94EBC8FD520.set('url', this.translate('PopupWebFrameBehaviour_569ADA0E_4442_6579_41C5_8BAA09BD669F.url')); this.showWindow(this.window_569DAA08_4442_6579_41C1_541231190E14, null, false)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_574BFD98_4442_9E99_41C8_4DA5752EED88","class":"ImageResource","levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_574BFD98_4442_9E99_41C8_4DA5752EED88_0.png"}]},{"id":"HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_526BDF9B_5EBA_E363_41CE_68ADB195E2B2, 115.75384615384615, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameDuration":41,"class":"AnimatedImageResource","frameCount":21,"colCount":4,"rowCount":6,"id":"AnimatedImageResource_5279AEBB_5EBA_E2A3_41CF_E893C9196729"},{"id":"HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA","click":"this.openLink(this.translate('LinkBehaviour_525B0825_43C3_A5AA_41BE_CE2E7D6B79C7.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC","class":"ImageResource","levels":[{"height":179,"width":318,"class":"ImageResourceLevel","url":"media/res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC_0.png"}]},{"id":"HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameDuration":300,"class":"AnimatedImageResource","frameCount":2,"colCount":1,"rowCount":2,"id":"AnimatedImageResource_52067EB3_5EBA_E2A3_41D6_D345EBA183DB"},{"id":"HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameDuration":41,"class":"AnimatedImageResource","frameCount":21,"colCount":4,"rowCount":6,"id":"AnimatedImageResource_5206DEB6_5EBA_E2A5_41CB_6A4DAAFD5D19"},{"id":"HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D","click":"this.WebFrame_52695F94_5EBA_E365_41A4_DDC4F12B1B35.set('url', this.translate('PopupWebFrameBehaviour_52353E09_43CE_9D7B_41B7_7A5EB719B40E.url')); this.showWindow(this.window_52347E08_43CE_9D79_41A0_D0956BAE2C15, null, false)","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameDuration":300,"class":"AnimatedImageResource","frameCount":2,"colCount":1,"rowCount":2,"id":"AnimatedImageResource_52071EB7_5EBA_E2A3_41D2_34E030154CE0"},{"width":3840,"posterURL":trans('videolevel_523F0D90_5EBA_E77D_41B8_E337AAB0F53E.posterURL'),"class":"VideoResourceLevel","framerate":29.97,"height":1920,"type":"application/x-mpegurl","url":trans('videolevel_523F0D90_5EBA_E77D_41B8_E337AAB0F53E.url'),"id":"videolevel_523F0D90_5EBA_E77D_41B8_E337AAB0F53E"},{"width":3840,"bitrate":16572,"posterURL":trans('videolevel_523F0DA8_5EBA_E6AE_41D5_01742DA1C3F2.posterURL'),"class":"VideoResourceLevel","framerate":29.97,"height":1920,"type":"video/mp4","url":trans('videolevel_523F0DA8_5EBA_E6AE_41D5_01742DA1C3F2.url'),"id":"videolevel_523F0DA8_5EBA_E6AE_41D5_01742DA1C3F2"},{"width":3840,"posterURL":trans('videolevel_5231ADFD_5EBA_E6A7_41B5_CF5BC0455EF2.posterURL'),"class":"VideoResourceLevel","framerate":29.97,"height":1920,"type":"application/x-mpegurl","url":trans('videolevel_5231ADFD_5EBA_E6A7_41B5_CF5BC0455EF2.url'),"id":"videolevel_5231ADFD_5EBA_E6A7_41B5_CF5BC0455EF2"},{"width":3840,"bitrate":16572,"posterURL":trans('videolevel_5231DDFD_5EBA_E6A7_41A2_3D30C1E6EACA.posterURL'),"class":"VideoResourceLevel","framerate":29.97,"height":1920,"type":"video/mp4","url":trans('videolevel_5231DDFD_5EBA_E6A7_41A2_3D30C1E6EACA.url'),"id":"videolevel_5231DDFD_5EBA_E6A7_41A2_3D30C1E6EACA"}],"height":"100%","defaultVRPointer":"laser","backgroundColor":["#663300"],"layout":"absolute","backgroundOpacity":1,"children":["this.MainViewer"],"backgroundColorRatios":[0],"backgroundPreloadEnabled":true,"scrollBarWidth":10,"mobileMipmappingEnabled":false,"defaultMenu":["fullscreen","mute","rotation"],"borderSize":0,"gap":10,"scrollBarVisible":"rollOver","class":"Player","scrollBarMargin":2,"downloadEnabled":false,"minWidth":0,"shadow":false,"minHeight":0,"data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"rate":1},"defaultLocale":"pt","name":"Player760","locales":{"pt":"locale/pt.txt"}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Nov 9 2022