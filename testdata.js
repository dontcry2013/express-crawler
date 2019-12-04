const data = `<div class="fsx">
<div class="center">
    <div class="head">
        <div class="title">各地高考历年分数线(批次线)</div>
        <div class="hline hline1"></div>
    </div>
    <div class="fsnav fsnavp clearfix">
        <div class="navfl fl">
            <img src="images/navword.png">
        </div>
        <div class="navregion fl clearfix">
            <div class="regli mtf_18 fl">
                <div class="regdiv mtf_2 clearfix">
                    <span>直辖</span>
                    <a href="#bj" target="_self">北京</a>
                    <a href="#sh" target="_self">上海</a>
                    <a href="#tj" target="_self">天津</a>
                    <a href="#cq" target="_self">重庆</a>
                </div>
                <div class="regdiv clearfix">
                    <span>西南</span>
                    <a href="#sc" target="_self">四川</a>
                    <a href="#yn" target="_self">云南</a>
                    <a href="#gz" target="_self">贵州</a>
                    <a href="#xz" target="_self">西藏</a>
                </div>
            </div>
            <div class="regli fl">
                <div class="regdiv mtf_2 clearfix">
                    <span>华北</span>
                    <a href="#hb" target="_self">河北</a>
                    <a href="#sx" target="_self">山西</a>
                    <a href="#nmg" target="_self">内蒙古</a>
                </div>
                <div class="regdiv clearfix">
                    <span>东北</span>
                    <a href="#ln" target="_self">辽宁</a>
                    <a href="#jl" target="_self">吉林</a>
                    <a href="#hlj" target="_self">黑龙江</a>
                </div>
            </div>
            <div class="regli fl">
                <div class="regdiv mtf_2 clearfix">
                    <span>华东</span>
                    <a href="#sd" target="_self">山东</a>
                    <a href="#js" target="_self">江苏</a>
                    <a href="#zj" target="_self">浙江</a>
                    <a href="#jx" target="_self">江西</a>
                    <a href="#fj" target="_self">福建</a>
                    <a href="#ah" target="_self">安徽</a>
                </div>
                <div class="regdiv clearfix">
                    <span>西北</span>
                    <a href="#shanx" target="_self">陕西</a>
                    <a href="#gs" target="_self">甘肃</a>
                    <a href="#nx" target="_self">宁夏</a>
                    <a href="#qh" target="_self">青海</a>
                    <a href="#xj" target="_self">新疆</a>
                </div>
            </div>
            <div class="regli fl">
                <div class="regdiv mtf_2 clearfix">
                    <span>华中</span>
                    <a href="#hen" target="_self">河南</a>
                    <a href="#hun" target="_self">湖南</a>
                    <a href="#hub" target="_self">湖北</a>
                </div>
                <div class="regdiv clearfix">
                    <span>华南</span>
                    <a href="#hain" target="_self">海南</a>
                    <a href="#gd" target="_self">广东</a>
                    <a href="#gx" target="_self">广西</a>
                </div>
            </div>
        </div>
    </div>
    <div class="fsnavm clearfix">
        <div class="word">请选择地区：</div>
        <select name="" id="qiehuan">
            <option value="1">北京</option>
            <option value="2">天津</option>
            <option value="3">上海</option>
            <option value="4">重庆</option>
            <option value="5">河北</option>
            <option value="6">山西</option>
            <option value="7">内蒙古</option>
            <option value="8">辽宁</option>
            <option value="9">吉林</option>
            <option value="10">黑龙江</option>
            <option value="11">山东</option>
            <option value="12">江苏</option>
            <option value="13">浙江</option>
            <option value="14">江西</option>
            <option value="15">福建</option>
            <option value="16">安徽</option>
            <option value="17">河南</option>
            <option value="18">湖南</option>
            <option value="19">湖北</option>
            <option value="20">海南</option>
            <option value="21">广东</option>
            <option value="22">广西</option>
            <option value="23">四川</option>
            <option value="24">云南</option>
            <option value="25">贵州</option>
            <option value="26">西藏</option>
            <option value="27">陕西</option>
            <option value="28">甘肃</option>
            <option value="29">宁夏</option>
            <option value="30">青海</option>
            <option value="31">新疆</option>
        </select>
    </div>
    <div class="fsshow clearfix">
        <div class="fsshowli" id="bj">
            <div class="topline">
                <div class="city">北京</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                        <tbody><tr class="tr-head">
                            <td class="td1">批次</td>
                            <td class="td2">文科</td>
                            <td class="td3">理科</td>
                        </tr>

                        <tr class="tr-cont">
                            <td>本科批</td>
                            <td>480</td>
                            <td>423</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>自主招生线</td>
                            <td>559</td>
                            <td>527</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>艺术类本科</td>
                            <td>335</td>
                            <td>295</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>体育类本科</td>
                            <td>330</td>
                            <td>300</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>专科提前批面试线</td>
                            <td>120</td>
                            <td>120</td>
                        </tr>
                    </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                        <tbody><tr class="tr-head">
                            <td class="td1">批次</td>
                            <td class="td2">文科</td>
                            <td class="td3">理科</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>一批</td>
                            <td>576</td>
                            <td>532</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>二批</td>
                            <td>488</td>
                            <td>432</td>
                        </tr>

                        <tr class="tr-cont">
                            <td>艺术类本科</td>
                            <td>340</td>
                            <td>300</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>体育</td>
                            <td>340</td>
                            <td>300</td>
                        </tr>
                        <tr class="tr-cont">
                            <td>专科</td>
                            <td>150</td>
                            <td>150</td>
                        </tr>
                    </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>555</td>
                        <td>537</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>468</td>
                        <td>439</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术</td>
                        <td>320</td>
                        <td>300</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>320</td>
                        <td>300</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>583</td>
                        <td>548</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>532</td>
                        <td>494</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>488</td>
                        <td>438</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>346</td>
                        <td>321</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>350</td>
                        <td>330</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>579</td>
                        <td>548</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>527</td>
                        <td>495</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>477</td>
                        <td>452</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>342</td>
                        <td>321</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>350</td>
                        <td>350</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>565</td>
                        <td>543</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>507</td>
                        <td>495</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>458</td>
                        <td>466</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>329</td>
                        <td>321</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>350</td>
                        <td>350</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="tj">
            <div class="topline">
                <div class="city">天津</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>428</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生参考线</td>
                        <td>500</td>
                        <td>551</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>299</td>
                        <td>280</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>380</td>
                        <td>374</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>436</td>
                        <td>407</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>130</td>
                        <td>130</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>531</td>
                        <td>521</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>401</td>
                        <td>395</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术</td>
                        <td>280</td>
                        <td>276</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>394</td>
                        <td>374</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>532</td>
                        <td>512</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>460</td>
                        <td>424</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>547</td>
                        <td>538</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>486</td>
                        <td>459</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>523</td>
                        <td>516</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>462</td>
                        <td>439</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>300</td>
                        <td>285</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>395</td>
                        <td>366</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="sh">
            <div class="topline">
                <div class="city">上海</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">分数线</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生控制分数线</td>
                        <td colspan="2">503</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科录取控制分数线</td>
                        <td colspan="2">403</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科文化控制分数线</td>
                        <td colspan="2">282</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科文化控制分数线</td>
                        <td colspan="2">262</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td colspan="2"> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">分数线</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生控制分数线</td>
                        <td colspan="2">502</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科录取控制分数线</td>
                        <td colspan="2">401</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科文化控制分数线</td>
                        <td colspan="2">281</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科文化控制分数线</td>
                        <td colspan="2">261</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td colspan="2">143</td>
                    </tr>
                    
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">分数线</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生控制分数线</td>
                        <td colspan="2">501</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科录取控制分数线</td>
                        <td colspan="2">402</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科文化控制分数线</td>
                        <td colspan="2">281</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科文化控制分数线</td>
                        <td colspan="2">261</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>450</td>
                        <td>438</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科</td>
                        <td>368</td>
                        <td>360</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>165</td>
                        <td>229</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>258</td>
                        <td>252</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科 </td>
                        <td>239</td>
                        <td>234</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>434</td>
                        <td>414</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>农村专项计划</td>
                        <td>414</td>
                        <td>394</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>372</td>
                        <td>348</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类文化本科</td>
                        <td>260</td>
                        <td>244</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>242</td>
                        <td>226</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>444</td>
                        <td>423</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>390</td>
                        <td>351</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="cq">
            <div class="topline">
                <div class="city">重庆</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>545</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>458</td>
                        <td>435</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>524</td>
                        <td>524</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>434</td>
                        <td>428</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>140</td>
                        <td>140</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201806/t20180623_1611811.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201806/t20180623_1611811.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201806/t20180623_1611811.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201806/t20180623_1611811.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>525</td>
                        <td>492</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>436</td>
                        <td>395</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>140</td>
                        <td>140</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201706/t20170623_1532920.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201706/t20170623_1532920.shtml">点击查看</a>
                        </td>

                    </tr>

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>527</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>435</td>
                        <td>416</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>140</td>
                        <td>140</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201606/t20160623_1419709.shtml">点击查看</a>
                        </td>
                        
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/chong_qing/dongtai/201606/t20160623_1419709.shtml">点击查看</a>
                        </td>

                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>572</td>
                        <td>573</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>532</td>
                        <td>527</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>482</td>
                        <td>485</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科一段</td>
                        <td>240</td>
                        <td>224</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科二段</td>
                        <td>140</td>
                        <td>150</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>555</td>
                        <td>514</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>507</td>
                        <td>455</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>466</td>
                        <td>422</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科一批</td>
                        <td>234</td>
                        <td>213</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科二批</td>
                        <td>160</td>
                        <td>150</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hb">
            <div class="topline">
                <div class="city">河北</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>549</td>
                        <td>502</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>461</td>
                        <td>379</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>220</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术</td>
                        <td>284</td>
                        <td>284</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>303/275（本）</td>
                        <td>210/275（本）</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>559</td>
                        <td>511</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>441</td>
                        <td>358</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>517</td>
                        <td>485</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>395</td>
                        <td>326</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>535</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>416</td>
                        <td>364</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>548</td>
                        <td>544</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>496</td>
                        <td>474</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>404</td>
                        <td>335</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>563</td>
                        <td>573</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>513</td>
                        <td>503</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>415</td>
                        <td>326</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="sx">
            <div class="topline">
                <div class="city">山西</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>542</td>
                        <td>507</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>481</td>
                        <td> 432</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>379</td>
                        <td>355</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类二批</td>
                        <td>337</td>
                        <td>302</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>434</td>
                        <td>406</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>385</td>
                        <td>346</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>546</td>
                        <td>516</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>476</td>
                        <td>432</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>355</td>
                        <td>335</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>437</td>
                        <td>413</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>518</td>
                        <td>481</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>452</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>337</td>
                        <td>313</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类二批</td>
                        <td>294</td>
                        <td>260</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>414</td>
                        <td>385</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>362</td>
                        <td>320</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>518</td>
                        <td>519</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>460</td>
                        <td>438</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>337</td>
                        <td>337</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类二批</td>
                        <td>299</td>
                        <td>285</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>414</td>
                        <td>415</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>368</td>
                        <td>350</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>513</td>
                        <td>515</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>462</td>
                        <td>442</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>333</td>
                        <td>335</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类二批</td>
                        <td>300</td>
                        <td>287</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>410</td>
                        <td>412</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>370</td>
                        <td>354</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>526</td>
                        <td>534</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>478</td>
                        <td>462</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类一批</td>
                        <td>342</td>
                        <td>347</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类二批</td>
                        <td>311</td>
                        <td>300</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>421</td>
                        <td>427</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>382</td>
                        <td>370</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="nmg">
            <div class="topline">
                <div class="city">内蒙古</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>522</td>
                        <td>477</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>436</td>
                        <td>352</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>398</td>
                        <td>348</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>320</td>
                        <td>274</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>501</td>
                        <td>478</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>399</td>
                        <td>336</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>390</td>
                        <td>368</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>307</td>
                        <td>298</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科一批</td>
                        <td>472</td>
                        <td>466</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科二批</td>
                        <td>375</td>
                        <td>328</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通高职高专</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>380</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>308</td>
                        <td>278</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科一批</td>
                        <td>477</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科二批</td>
                        <td>375</td>
                        <td>346</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通高职高专</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>366</td>
                        <td>358</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>289</td>
                        <td>277</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科一批</td>
                        <td>487</td>
                        <td>464</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科二批</td>
                        <td>385</td>
                        <td>336</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通高职高专</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>337</td>
                        <td>293</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>240</td>
                        <td>201</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科一批</td>
                        <td>525</td>
                        <td>501</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科二批</td>
                        <td>455</td>
                        <td>388</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通高职高专</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科一批</td>
                        <td>367</td>
                        <td>323</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授本科二批</td>
                        <td>258</td>
                        <td>211</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>蒙授高职高专</td>
                        <td>120</td>
                        <td>120</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="ln">
            <div class="topline">
                <div class="city">辽宁</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
            
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>564</td>
                        <td>512</td>
                    </tr>
                            <tr class="tr-cont">
                        <td>本科</td>
                        <td>482</td>
                        <td>369</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>337</td>
                        <td>258</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>553</td>
                        <td>517</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科</td>
                        <td>461</td>
                        <td>368</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/liao_ning/dongtai/201806/t20180623_1611888.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/liao_ning/dongtai/201806/t20180623_1611888.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>532</td>
                        <td>480</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>428</td>
                        <td>350</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类普通本科</td>
                        <td>278</td>
                        <td>228</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类高职高专</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本、专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>525</td>
                        <td>498</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>417</td>
                        <td>373</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高水平运动队</td>
                        <td>296</td>
                        <td>267</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>296</td>
                        <td>267</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本、专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>530</td>
                        <td>500</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>460</td>
                        <td>419</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>395</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>299</td>
                        <td>272</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本、专科 </td>
                        <td>180</td>
                        <td>180 </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>552</td>
                        <td>526</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>490</td>
                        <td>450</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>430</td>
                        <td>380</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>220</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>320</td>
                        <td>290</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本、专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="jl">
            <div class="topline">
                <div class="city">吉林</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>544</td>
                        <td>530</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>372</td>
                        <td>350</td>
                    </tr>
                        <tr class="tr-cont">
                        <td>体育类普通本科</td>
                        <td>344</td>
                        <td>310</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类普通本科</td>
                        <td>279</td>
                        <td>263</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>542</td>
                        <td>533</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>432</td>
                        <td>405</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>316</td>
                        <td>283</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>体育类普通本科</td>
                        <td>332</td>
                        <td>304</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类普通本科</td>
                        <td>280</td>
                        <td>263</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>528</td>
                        <td>507</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>412</td>
                        <td>379</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>286</td>
                        <td>260</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类普通本科</td>
                        <td>316</td>
                        <td>271</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类普通本科</td>
                        <td>267</td>
                        <td>246</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>531</td>
                        <td>530</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>413</td>
                        <td>402</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>275</td>
                        <td>286</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>290</td>
                        <td>256</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>268</td>
                        <td>261</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>543</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>433</td>
                        <td>405</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>300</td>
                        <td>305</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>281</td>
                        <td>263</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>310</td>
                        <td>270</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>560</td>
                        <td>555</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>459</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>350</td>
                        <td>350</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>298</td>
                        <td>290</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>320</td>
                        <td>280</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hlj">
            <div class="topline">
                <div class="city">黑龙江</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>500</td>
                        <td>477</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>424</td>
                        <td>372</td>
                    </tr>
                
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>254</td>
                        <td>236</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>254</td>
                        <td>223</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科三批</td>
                        <td>348</td>
                        <td>324</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>490</td>
                        <td>472</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>406</td>
                        <td>353</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>481</td>
                        <td>455</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>400</td>
                        <td>335</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>239</td>
                        <td>212</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>240</td>
                        <td>201</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>481</td>
                        <td>486</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>401</td>
                        <td>369</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>242</td>
                        <td>234</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>240</td>
                        <td>221</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>495</td>
                        <td>483</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>410</td>
                        <td>371</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>333</td>
                        <td>310</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>249</td>
                        <td>235</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>246</td>
                        <td>222</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>541</td>
                        <td>529</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>454</td>
                        <td>414</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>378</td>
                        <td>330</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>277</td>
                        <td>262</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="sd">
            <div class="topline">
                <div class="city">山东</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>503</td>
                        <td>443</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生参考线</td>
                        <td>542</td>
                        <td>514</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高水平运动员</td>
                        <td>326</td>
                        <td>287</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>326</td>
                        <td>287</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育专业</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>505</td>
                        <td>435</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>550</td>
                        <td>517</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高水平运动员</td>
                        <td>328</td>
                        <td>282 </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>328</td>
                        <td>282</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>170</td>
                        <td>170</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科普通批</td>
                        <td>483</td>
                        <td>433</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>529</td>
                        <td>515</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>313</td>
                        <td>281</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>483</td>
                        <td>433 </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>530</td>
                        <td>537</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>474</td>
                        <td>451</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>170</td>
                        <td>170</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>308</td>
                        <td>293</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>306</td>
                        <td>306</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>568</td>
                        <td>562</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>510</td>
                        <td>490</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>579</td>
                        <td>572</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>军检线</td>
                        <td>554</td>
                        <td>547</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="js">
            <div class="topline">
                <div class="city">江苏</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>339</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>277</td>
                        <td>307</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>337</td>
                        <td>336</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>281</td>
                        <td>285</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>228</td>
                        <td>248</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>333</td>
                        <td>331</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>281</td>
                        <td>269</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/jiang_su/dongtai/201706/t20170624_1533695.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/jiang_su/dongtai/201706/t20170624_1533695.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/jiang_su/dongtai/201706/t20170624_1533695.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/jiang_su/dongtai/201706/t20170624_1533695.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>355</td>
                        <td>353</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>325</td>
                        <td>315</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>282</td>
                        <td>265</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>210</td>
                        <td>210</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>232</td>
                        <td>232</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>342</td>
                        <td>344</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>313</td>
                        <td>310</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>288</td>
                        <td>278</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>333</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>301</td>
                        <td>312</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>272</td>
                        <td>279</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="zj">
            <div class="topline">
                <div class="city">浙江</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">综合</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第一段</td>
                        <td colspan="2">595</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第二段</td>
                        <td colspan="2">496</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第三段</td>
                        <td colspan="2">264</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一段</td>
                        <td colspan="2">507</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二段</td>
                        <td colspan="2">452</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">综合</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第一段</td>
                        <td colspan="2">588</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第二段</td>
                        <td colspan="2">490</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第三段</td>
                        <td colspan="2">344</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一段</td>
                        <td colspan="2">-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二段</td>
                        <td colspan="2">-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-cont">
                        <td style="width: 225px">批次</td>
                        <td colspan="2">综合</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第一段</td>
                        <td colspan="2">577</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第二段</td>
                        <td colspan="2">480</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第三段</td>
                        <td colspan="2">359</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一段</td>
                        <td colspan="2">497</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二段</td>
                        <td colspan="2">451</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/zhe_jiang/dongtai/201706/t20170622_1532443.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>603</td>
                        <td>600</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>462</td>
                        <td>439</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/zhe_jiang/dongtai/201606/t20160622_1418540.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/zhe_jiang/dongtai/201606/t20160622_1418540.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/zhe_jiang/dongtai/201606/t20160622_1418540.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/zhe_jiang/dongtai/201606/t20160622_1418540.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>626</td>
                        <td>605</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第二批</td>
                        <td>472</td>
                        <td>428</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第三批</td>
                        <td>263</td>
                        <td>266</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>第一批文化线体育特招生</td>
                        <td>337</td>
                        <td>311</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>621</td>
                        <td>597</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>485</td>
                        <td>420</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>292</td>
                        <td>288</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类第一、二批文化线美术类</td>
                        <td>380</td>
                        <td>322</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类第一批文化线体育类</td>
                        <td>423</td>
                        <td>365</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="jx">
            <div class="topline">
                <div class="city">江西</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>558</td>
                        <td>522</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>502</td>
                        <td>449</td>
                    </tr>
                    
                    <tr class="tr-cont">
                        <td>军校军检线</td>
                        <td>548</td>
                        <td>512</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>568</td>
                        <td>527</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>496</td>
                        <td>447</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>军校军检线</td>
                        <td>558</td>
                        <td>517</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>533</td>
                        <td>503</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>458</td>
                        <td>422</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>军校军检线</td>
                        <td>523</td>
                        <td>493</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/jiang_xi/dongtai/201706/t20170623_1532851.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/jiang_xi/dongtai/201706/t20170623_1532851.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>523</td>
                        <td>529</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>450</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>军校</td>
                        <td>513</td>
                        <td>519</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/jiang_xi/dongtai/201606/t20160623_1419550.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/jiang_xi/dongtai/201606/t20160623_1419550.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>528</td>
                        <td>540</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>487</td>
                        <td>490</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>456</td>
                        <td>456</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>军检线</td>
                        <td>508</td>
                        <td>520</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>

                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>524</td>
                        <td>526</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>479</td>
                        <td>471</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>450</td>
                        <td>438</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="fj">
            <div class="topline">
                <div class="city">福建</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>550</td>
                        <td>493</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>464</td>
                        <td>393</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>220</td>
                        <td>220</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺、体本科</td>
                        <td>302</td>
                        <td>255</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺、体专科</td>
                        <td>154</td>
                        <td>154</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>551</td>
                        <td>490</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>446</td>
                        <td>378</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>363</td>
                        <td>258</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术本科</td>
                        <td>290</td>
                        <td>246</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育专科</td>
                        <td>253</td>
                        <td>181</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>489</td>
                        <td>441</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>380</td>
                        <td>333</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>300</td>
                        <td>236</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育本科</td>
                        <td>247</td>
                        <td>216</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育专科</td>
                        <td>210</td>
                        <td>165</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>501</td>
                        <td>465</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>403</td>
                        <td>352</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>319</td>
                        <td>251</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育本科</td>
                        <td>262</td>
                        <td>229</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育专科</td>
                        <td>223</td>
                        <td>176</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>549</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>462</td>
                        <td>410</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>352</td>
                        <td>266</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育本科</td>
                        <td>300</td>
                        <td>267</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术体育专科</td>
                        <td>246</td>
                        <td>186</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>561</td>
                        <td>506</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>482</td>
                        <td>408</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>357</td>
                        <td>246</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="ah">
            <div class="topline">
                <div class="city">安徽</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>550</td>
                        <td>496</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>504</td>
                        <td>426</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>550</td>
                        <td>505</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>486</td>
                        <td>432</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>515</td>
                        <td>487</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>440</td>
                        <td>413</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>521</td>
                        <td>518</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>482</td>
                        <td>473</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>453</td>
                        <td>446</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>251</td>
                        <td>290</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>314</td>
                        <td>308</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>艺术A类本科</td>
                        <td>338</td>
                        <td>332</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>597</td>
                        <td>555</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>558</td>
                        <td>511</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>522</td>
                        <td>483</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>541</td>
                        <td>489</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>500</td>
                        <td>438</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>469</td>
                        <td>409</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hen">
            <div class="topline">
                <div class="city">河南</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>536</td>
                        <td>502</td> 
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>447</td>
                        <td>385</td> 
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td> 
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>547</td>
                        <td>499</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>436</td>
                        <td>374</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>516</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>389</td>
                        <td>342</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>517</td>
                        <td>523</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>458</td>
                        <td>447</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>393</td>
                        <td>370</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专项计划本科批</td>
                        <td>513</td>
                        <td>529</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>513</td>
                        <td>529</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>455</td>
                        <td>458</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>397</td>
                        <td>383</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专项计划本科批</td>
                        <td>536</td>
                        <td>547</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>536</td>
                        <td>547</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>483</td>
                        <td>476</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>425</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hun">
            <div class="topline">
                <div class="city">湖南</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>553</td>
                        <td>500</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>523</td>
                        <td>448</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>495</td>
                        <td>414</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>569</td>
                        <td>513</td>

                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>526</td>
                        <td>450</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>486</td>
                        <td>409</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>548</td>
                        <td>505</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>485</td>
                        <td>424</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>441</td>
                        <td>383</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>530</td>
                        <td>517</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>476</td>
                        <td>439</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>431</td>
                        <td>396</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>535</td>
                        <td>526</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>

                        <td>481</td>
                        <td>455</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>435</td>
                        <td>406</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>562</td>
                        <td>522</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>501</td>
                        <td>442</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批A</td>
                        <td>473</td>
                        <td>406</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批B</td>
                        <td>453</td>
                        <td>386</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hub">
            <div class="topline">
                <div class="city">湖北</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>542</td>
                        <td>505</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>445</td>
                        <td>388</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科一批</td>
                        <td>561</td>
                        <td>512</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科二批</td>
                        <td>441</td>
                        <td>375</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201806/t20180623_1611940.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201806/t20180623_1611940.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201806/t20180623_1611940.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201806/t20180623_1611940.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>528</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>406</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201706/t20170623_1533142.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201706/t20170623_1533142.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>520</td>
                        <td>512</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>403</td>
                        <td>350</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201606/t20160623_1420125.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hu_bei/dongtai/201606/t20160623_1420125.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>521</td>
                        <td>510</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>477</td>
                        <td>448</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>415</td>
                        <td>360</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>535</td>
                        <td>533</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>482</td>
                        <td>471</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>417</td>
                        <td>380</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职高专一批</td>
                        <td>325</td>
                        <td>295</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职高专二批 </td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="hain">
            <div class="topline">
                <div class="city">海南</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科A批</td>
                        <td>593</td>
                        <td>539</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>国家专项计划</td>
                        <td>593</td>
                        <td>539</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>654</td>
                        <td>603</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育本科A批</td>
                        <td>441/77</td>
                        <td>441/77</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>415</td>
                        <td>415</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科</td>
                        <td>280</td>
                        <td>280</td>
                    </tr>
                    
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科A批</td>
                        <td>579</td>
                        <td>539</td>

                    </tr>
                    <tr class="tr-cont">
                        <td>国家专项计划</td>
                        <td>579</td>
                        <td>539</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>655</td>
                        <td>602</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育本科A批</td>
                        <td colspan="2">439/77</td>

                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td colspan="2">376</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>280</td>
                        <td>280</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科A批</td>
                        <td>578</td>
                        <td>539</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>国家专项计划</td>
                        <td>578</td>
                        <td>539</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>自主招生</td>
                        <td>656</td>
                        <td>603</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hai_nan/dongtai/201706/t20170625_1533884.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/hai_nan/dongtai/201706/t20170625_1533884.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科一批</td>
                        <td>653</td>
                        <td>602</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科二批</td>
                        <td>577</td>
                        <td>543</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>280</td>
                        <td>333</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>国家专项计划本科一批</td>
                        <td>643</td>
                        <td>602</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>国家专项计划本科二批</td>
                        <td>577</td>
                        <td>543</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>662</td>
                        <td>608</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>588</td>
                        <td>546</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>494</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科提前批</td>
                        <td>304</td>
                        <td>365</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>666</td>
                        <td>606</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>590</td>
                        <td>542</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>498</td>
                        <td>482</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科提前批</td>
                        <td>313</td>
                        <td>366</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="gd">
            <div class="topline">
                <div class="city">广东</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>455</td>
                        <td>390</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高分优先投档线</td>
                        <td>546</td>
                        <td>495</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>170</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>本科批</td>
                        <td>443</td>
                        <td>376</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高分优先投档线</td>
                        <td>550</td>
                        <td>500</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>215</td>
                        <td>205</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/guang_dong/dongtai/201806/t20180625_1612476.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/guang_dong/dongtai/201806/t20180625_1612476.shtml">点击查看</a>
                        </td>

                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>520</td>
                        <td>485</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>418</td>
                        <td>360</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>210</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/guang_dong/dongtai/201706/t20170625_1533987.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/guang_dong/dongtai/201706/t20170625_1533987.shtml">点击查看</a>
                        </td>

                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>514</td>
                        <td>508</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>417</td>
                        <td>402</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科A</td>
                        <td>360</td>
                        <td>330</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科B</td>
                        <td>245</td>
                        <td>245</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>573</td>
                        <td>577</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批A</td>
                        <td>524</td>
                        <td>519</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批B</td>
                        <td>474</td>
                        <td>483</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科A</td>
                        <td>403</td>
                        <td>407</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科B</td>
                        <td>270</td>
                        <td>280</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>579</td>
                        <td>560</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批A</td>
                        <td>534</td>
                        <td>504</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批B</td>
                        <td>483</td>
                        <td>465</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批A</td>
                        <td>425</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批B</td>
                        <td>290</td>
                        <td>280</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="gx">
            <div class="topline">
                <div class="city">广西</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>521</td>
                        <td>509</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>388</td>
                        <td>347</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>291</td>
                        <td>260</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>547</td>
                        <td>513</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>403</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>-</td>
                        <td>-</td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>-</td>
                        <td>-</td>

                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>535</td>
                        <td>473</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>387</td>
                        <td>318</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>252</td>
                        <td>207</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>218</td>
                        <td>218</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>545</td>
                        <td>502</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>400</td>
                        <td>333</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>260</td>
                        <td>216</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>230</td>
                        <td>230</td>
                    </tr>

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>530</td>
                        <td>480</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>380</td>
                        <td>320</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术本</td>
                        <td>247</td>
                        <td>208</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术专</td>
                        <td>126</td>
                        <td>126</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>550</td>
                        <td>520</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>463</td>
                        <td>407</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>404</td>
                        <td>326</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="sc">
            <div class="topline">
                <div class="city">四川</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>540</td>
                        <td>547</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>472</td>
                        <td>459</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类专科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>553</td>
                        <td>546</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>492</td>
                        <td>458</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>190</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/si_chuan/dongtai/201806/t20180623_1611981.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类专科</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/si_chuan/dongtai/201806/t20180623_1611981.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>537</td>
                        <td>511</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>470</td>
                        <td>436</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职(专科)</td>
                        <td>190</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>彝文专业本科</td>

                        <td>417</td>
                        <td>442</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>藏文专业本科</td>
                        <td>311</td>
                        <td>273</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>540</td>
                        <td>532</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>480</td>
                        <td>453</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科一批</td>
                        <td>445</td>
                        <td>390</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科二批</td>
                        <td>190</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>543</td>
                        <td>528</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>473</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>551</td>
                        <td>540</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>500</td>
                        <td>475</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>476</td>
                        <td>446</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>彝文专业本科</td>
                        <td>435</td>
                        <td>337</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>藏文专业本科</td>
                        <td>304</td>
                        <td>227</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="yn">
            <div class="topline">
                <div class="city">云南</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>560</td>
                        <td>535</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>480</td>
                        <td>435</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>575</td>
                        <td>530</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>490</td>
                        <td>430</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科 </td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>555</td>
                        <td>500</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>465</td>
                        <td>410</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>300</td>
                        <td>300</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科 </td>
                        <td>380</td>
                        <td>330</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>390</td>
                        <td>330</td>
                    </tr>

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>560</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>495</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>445</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>300</td>
                        <td>300</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>375</td>
                        <td>325</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>380</td>
                        <td>335</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>540</td>
                        <td>500</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>470</td>
                        <td>425</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>420</td>
                        <td>380</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>300</td>
                        <td>300</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>365</td>
                        <td>330</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>365</td>
                        <td>330</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>565</td>
                        <td>525</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>500</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>450</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科一批</td>
                        <td>430</td>
                        <td>370</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科二批</td>
                        <td>245</td>
                        <td>280</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="gz">
            <div class="topline">
                <div class="city">贵州</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>542</td>
                        <td>470</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>453</td>
                        <td>369</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>575</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>477</td>
                        <td>379</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>545</td>
                        <td>456</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>453</td>
                        <td>361</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>551</td>
                        <td>473</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>457</td>
                        <td>365</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>543</td>
                        <td>453</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>472</td>
                        <td>372</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>438</td>
                        <td>345</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>220</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>569</td>
                        <td>484</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>489</td>
                        <td>382</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="xz">
            <div class="topline">
                <div class="city">西藏</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>420</td>
                        <td>425</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>320</td>
                        <td>320</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本少数民族</td>
                        <td>350</td>
                        <td>325</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本少数民族</td>
                        <td>300</td>
                        <td>283</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科汉族</td>
                        <td>155</td>
                        <td>205</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>155</td>
                        <td>205</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>460</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>355</td>
                        <td>335</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本少数民族</td>
                        <td>375</td>
                        <td>327</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本少数民族</td>
                        <td>320</td>
                        <td>278</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科汉族</td>
                        <td>169</td>
                        <td>213</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>148</td>
                        <td>210</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>441</td>
                        <td>426</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>356</td>
                        <td>316</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">重点本科少数民族</td>
                        <td>353</td>
                        <td>296</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">普通本科少数民族</td>
                        <td>302</td>
                        <td>247</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职专科汉族</td>
                        <td>249</td>
                        <td>240</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>192</td>
                        <td>193</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>440</td>
                        <td>425</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>355</td>
                        <td>315</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">重点本科少数民族</td>

                        <td>325</td>
                        <td>285</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">普通本科少数民族</td>
                        <td>285</td>
                        <td>235</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科汉族</td>
                        <td>312</td>
                        <td>270</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>242</td>
                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>440</td>
                        <td>420</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>355</td>
                        <td>315</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">重点本科少数民族</td>
                        <td>325</td>
                        <td>280</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">普通本科少数民族</td>
                        <td>285</td>
                        <td>235</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科汉族</td>
                        <td>315</td>
                        <td>280</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>245</td>
                        <td>190</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>重点本科汉族</td>
                        <td>500</td>
                        <td>460</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>普通本科汉族</td>
                        <td>355</td>
                        <td>310</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">重点本科少数民族</td>
                        <td>340</td>
                        <td>280</td>
                    </tr>
                    <tr class="tr-cont">
                        <td style="font-size:13px;">普通本科少数民族</td>
                        <td>285</td>
                        <td>230</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科汉族</td>
                        <td>323</td>
                        <td>288</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科少数民族</td>
                        <td>251</td>
                        <td>196</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="shanx">
            <div class="topline">
                <div class="city">陕西</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>518</td>
                        <td>468</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>400</td>
                        <td>363</td>
                    </tr>
                    
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>300</td>
                        <td>273</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类专科</td>
                        <td>105</td>
                        <td>105</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>518</td>
                        <td>474</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>467</td>
                        <td>425</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>345</td>
                        <td>332</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>304</td>
                        <td>276</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类专科</td>
                        <td>112</td>
                        <td>112</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>509</td>
                        <td>449</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>457</td>
                        <td>397</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>334</td>
                        <td>301</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>297</td>
                        <td>258</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类专科</td>
                        <td>105</td>
                        <td>105</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>511</td>
                        <td>470</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>460</td>
                        <td>423</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>381</td>
                        <td>344</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>225</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类本科</td>
                        <td>299</td>
                        <td>245</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>510</td>
                        <td>480</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>467</td>
                        <td>440</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>382</td>
                        <td>350</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>548</td>
                        <td>503</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>492</td>
                        <td>452</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>387</td>
                        <td>342</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>273</td>
                        <td>256</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="gs">
            <div class="topline">
                <div class="city">甘肃</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>519</td>
                        <td>470</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>400</td>
                        <td>366</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                        <tr class="tr-cont">
                        <td>民族院校民族班</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>502</td>
                        <td>483</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>456</td>
                        <td>436</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>380</td>
                        <td>370</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民族院校民族班</td>
                        <td>400</td>
                        <td>380</td>
                    </tr>
                    <tr class="tr-cont">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>505</td>
                        <td>460</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>458</td>
                        <td>408</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>383</td>
                        <td>337</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>180</td>

                        <td>180</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>504</td>
                        <td>490</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>455</td>
                        <td>435</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>391</td>
                        <td>367</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>517</td>
                        <td>475</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>465</td>
                        <td>417</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>415</td>
                        <td>355</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民族班</td>
                        <td>420</td>
                        <td>370</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>543</td>
                        <td>516</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>499</td>
                        <td>459</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>446</td>
                        <td>350</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民族班</td>
                        <td>430</td>
                        <td>395</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="nx">
            <div class="topline">
                <div class="city">宁夏</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>538</td>
                        <td>457</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>455</td>
                        <td>381</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    
                    
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>528</td>
                        <td>463</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>498</td>
                        <td>432</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>418</td>
                        <td>352</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200 </td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201806/t20180623_1611791.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201806/t20180623_1611791.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201806/t20180623_1611791.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201806/t20180623_1611791.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>519</td>
                        <td>439</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>487</td>
                        <td>408</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>407</td>
                        <td>328</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201706/t20170623_1532805.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201706/t20170623_1532805.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201706/t20170623_1532805.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/ning_xia/dongtai/201706/t20170623_1532805.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>516</td>
                        <td>465</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>486</td>
                        <td>434</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>406</td>
                        <td>354</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类一批</td>
                        <td>474</td>
                        <td>423</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类二批</td>
                        <td>411</td>
                        <td>362</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>507</td>
                        <td>445</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>478</td>
                        <td>416</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>378</td>
                        <td>316</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>517</td>
                        <td>473</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>486</td>
                        <td>440</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>370</td>
                        <td>320</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="qh">
            <div class="topline">
                <div class="city">青海</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>488</td>
                        <td>407</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>444</td>
                        <td>376</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>405</td>
                        <td>348</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>160</td>
                        <td>160</td>
                    </tr>
                    
                    
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>475</td>
                        <td>403</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>424</td>
                        <td>365</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>377</td>
                        <td>334</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>藏汉双语</td>
                        <td>455</td>
                        <td>399</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育本科</td>
                        <td>367</td>
                        <td>310</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201806/t20180625_1612500.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201806/t20180625_1612500.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>463</td>
                        <td>391</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>421</td>
                        <td>356</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>382</td>
                        <td>328</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201706/t20170625_1534018.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201706/t20170625_1534018.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201706/t20170625_1534018.shtml">点击查看</a>
                        </td>
                        <td>
                            <a href="//gaokao.eol.cn/qing_hai/dongtai/201706/t20170625_1534018.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>457</td>
                        <td>416</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>415</td>
                        <td>380</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>379</td>
                        <td>353</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>466</td>
                        <td>400</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>420</td>
                        <td>363</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>382</td>
                        <td>339</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>一批</td>
                        <td>473</td>
                        <td>406</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>二批</td>
                        <td>426</td>
                        <td>362</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>三批</td>
                        <td>386</td>
                        <td>330</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类本科</td>
                        <td>331</td>
                        <td>280</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类专科</td>
                        <td>248</td>
                        <td>242</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        <div class="fsshowli" id="xj">
            <div class="topline">
                <div class="city">新疆</div>
            </div>
            <div class="sline clearfix">
                <div class="year act mtf_0">2019年</div>
                <div class="year">2018年</div>
                <div class="year">2017年</div>
                <div class="year mtf_0">2016年</div>
                <div class="year">2015年</div>
                <div class="year">2014年</div>
            </div>
            <div class="tline">
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科一批</td>
                        <td>510</td>
                        <td>450</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科二批</td>
                        <td>387</td>
                        <td>326</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言专科</td>
                        <td>180</td>
                        <td>180</td>
                    </tr>
                

                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科一批</td>
                        <td>500</td>
                        <td>467</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科二批</td>
                        <td>372</td>
                        <td>341</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>汉语言专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201806/t20180626_1613146.shtml">点击查看</a>
                        </td>
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201806/t20180626_1613146.shtml">点击查看</a>
                        </td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科一批</td>
                        <td>486</td>
                        <td>437</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科二批</td>
                        <td>375</td>
                        <td>333</td>
                    </tr>

                    <tr class="tr-cont">
                        <td>汉语言专科</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201706/t20170626_1534379.shtml">点击查看</a>
                        </td>

                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201706/t20170626_1534379.shtml">点击查看</a>
                        </td>

                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语本科一批</td>
                        <td>487</td>
                        <td>464</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语本科二批</td>
                        <td>415</td>
                        <td>394</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语本科三批</td>
                        <td>372</td>
                        <td>363</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言高职</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>艺术类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201606/t20160626_1421776.shtml">点击查看</a>
                        </td>
                        
                    </tr>
                    <tr class="tr-cont">
                        <td>体育类</td>
                        <td colspan="2">
                            <a href="//gaokao.eol.cn/xin_jiang/dongtai/201606/t20160626_1421776.shtml">点击查看</a>
                        </td>
                        
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科一批</td>
                        <td>486</td>
                        <td>446</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民语言本科一批</td>
                        <td>424</td>
                        <td>334</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科二批</td>
                        <td>414</td>
                        <td>381</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民语言本科二批</td>
                        <td>394</td>
                        <td>304</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科三批</td>
                        <td>368</td>
                        <td>350</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言专科 </td>
                        <td>299</td>
                        <td>265</td>
                    </tr>
                </tbody></table>
                </div>
                <div>
                    <table class="" width="" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr class="tr-head">
                        <td class="td1">批次</td>
                        <td class="td2">文科</td>
                        <td class="td3">理科</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科一批</td>
                        <td>516</td>
                        <td>475</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民语言本科一批</td>
                        <td>456</td>
                        <td>359</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科二批</td>
                        <td>446</td>
                        <td>405</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>民语言本科二批</td>
                        <td>424</td>
                        <td>327</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言本科三批</td>
                        <td>389</td>
                        <td>360</td>
                    </tr>
                    <tr class="tr-cont">
                        <td>汉语言专科一批 </td>
                        <td>300</td>
                        <td>265</td>
                    </tr>
                </tbody></table>
                </div>
            </div>
        </div>
        
        </div>
    </div>
    <div class="more">加载更多</div>
</div>`;
module.exports = data;
