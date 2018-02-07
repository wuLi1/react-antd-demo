import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
const provinceData = ['浙江省', '江苏省','北京市','上海市','重庆市','天津市','河北省','山西省','辽宁省','吉林省','黑龙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古自治区','广西壮族自治区','西藏自治区','宁夏回族自治区','新疆维吾尔族自治区','香港特别行政区','澳门特别行政区'];
const cityData = {
  浙江省: ['杭州市', '宁波市', '温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','其他'],
  江苏省: ['南京市', '苏州市', '镇江市','徐州市','常州市','南通市','连云港市','淮阴市','盐城市','扬州市','其他'],
  北京市: ['东城','西城','海淀','朝阳','丰台','门头沟','石景山','房山','通州','顺义','昌平','大兴','怀柔','平谷','延庆','密云','其他'],
  上海市: ['黄浦区','徐汇区','长宁区','杨浦区','虹口区','普陀区','静安区','浦东新区','其他'],
  重庆市: ['渝中区','江北区','南岸区','九龙坡区','沙坪坝区','大渡口区','北碚区','渝北区','巴南区','其他'],
  天津市: ['和平区','河东区','河西区','南开区','河北区','红桥区','滨海新区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区','宁河区','静海区','蓟州区','其他'],
  河北省: ['石家庄','唐山','邯郸','保定','沧州','邢台','廊坊','承德','张家口','衡水','秦皇岛','其他'],
  山西省: ['晋中市','太原市','大同市','阳泉市','长治市','晋城市','朔州市','运城市','忻州市','临汾市','吕梁市','其他'],
  辽宁省: ['沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市','其他'],
  吉林省: ['长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边朝鲜族自治州','延吉市','图们市','敦化市','珲春市','龙井市','和龙市','其他'],
  黑龙江省: ['哈尔滨市','齐齐哈尔市','牡丹江市','佳木斯市','大庆市','鸡西市','双鸭山市','鹤岗市','绥化市','七台河市','伊春市','黑河市','大兴安岭地区','其他'],
  安徽省: ['合肥市','芜湖市','淮南市','蚌埠市','马鞍山','阜阳市','安庆市','淮北市','宿州市','六安市','铜陵市','滁州市','亳州市','黄山市','巢湖市','宣城市','池州市','其他'],
  福建省: ['福州市','厦门市','泉州','漳州市','三明市','龙岩市','南平市','莆田市','宁德市','其他'],
  江西省: ['南昌市','九江市','新余市','景德镇市','赣州市','吉安市','抚州市','萍乡市','鹰潭市','宜春市','上饶市','其他'],
  山东省: ['济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州市','菏泽市','其他'],
  河南省: ['郑州市','开封市','洛阳市','平顶山市','焦作市','鹤壁市','新乡市','安阳市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市','其他'],
  湖北省: ['武汉市','黄石市','襄樊市','十堰市','荆州市','宜昌市','荆门市','鄂州市','孝感市','黄冈市','咸宁市','随州市','恩施市','仙桃市','潜江市','天门市','神农架林区','其他'],
  广东省: ['佛山市','东莞市','中山市','珠海市','江门市','肇庆市','惠州市','汕头市','潮州市','揭阳市','汕尾市','湛江市','茂名市','阳江市','韶关市','清远市','云浮市','梅州市','河源市','广州市','深圳市','其他'],
  海南省: ['海口市','三亚市','儋州市','五指山市','文昌市','琼海市','万宁市','东方市','其他'],
  四川省: ['成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','宜宾市','广安市','达州市','眉山市','雅安市','巴中市','资阳市','阿坝州','甘孜州','凉山州','其他'],
  贵州省: ['贵阳市','六盘水市','安顺市','遵义市','黔南布依族苗族自治州','黔西南布依族苗族自治州','黔东南苗族侗族自治州','毕节市','其他'],
  云南省: ['昆明市','曲靖市','玉溪市','保山市','昭通市','丽江市','普洱市','临沧市','文山壮族苗族自治州','红河哈尼族彝族自治州','西双版纳','楚雄市','大理市','德宏市','怒江傈僳族自治州','迪庆藏族自治州','其他','其他'],
  陕西省: ['西安市','咸阳市','商洛市','安康市','汉中市','延安市','渭南市','铜川市','榆林市','其他'],
  甘肃省: ['兰州市','天水市','白银市','平凉市','庆阳市','陇南市','定西市','金昌市','武威市','张掖市','酒泉市','嘉峪关市','临夏回族自治州','甘南藏族自治州','其他'],
  青海省: ['西宁市','海东市','海北藏族自治州','黄南藏族自治州','海南藏族自治州','果洛藏族自治州','玉树藏族自治州','海西蒙古族藏族自治州','其他'],
  台湾省: ['基隆市','台中市','新竹市','台南市','嘉义市','其他'],
  内蒙古自治区: ['呼和浩特市','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市','巴彦淖尔市','乌兰察布市','兴安盟','锡林郭勒盟','阿拉善盟','其他'],
  广西壮族自治区: ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市','其他'],
  西藏自治区: ['拉萨','日喀则','其他'],
  宁夏回族自治区: ['银川市','石嘴山市','吴忠市','固原市','中卫市','其他'],
  新疆维吾尔族自治区: ['乌鲁木齐市','克拉玛依市','吐鲁番市','哈密市','阿克苏地区','喀什地区','和田地区','昌吉回族自治州','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州','克孜勒苏柯尔克孜自治州','伊犁哈萨克自治州','其他'],
  香港特别行政区: ['香港特别行政区'],
  澳门特别行政区: ['澳门特别行政区']
};

export default class City extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			cities: cityData[provinceData[0]],
	      secondCity: cityData[provinceData[0]][0],
		}
	}

	  handleProvinceChange(value) {
	    this.setState({
	      cities: cityData[value],
	      secondCity: cityData[value][0],
	    });
	  }

	  onSecondCityChange(value) {
	    this.setState({
	      secondCity: value,
	    });
     }

	render() {
	    const provinceOptions = provinceData.map((province) => <Option key={province}>{province}</Option>);
	    const cityOptions = this.state.cities.map((city) => <Option key={city}>{city}</Option>);
    return (
	      <div>
	        <Select defaultValue={provinceData[0]} style={{ width: 100,marginRight:10 }} onChange={(value)=>this.handleProvinceChange(value)}>
	          {provinceOptions}
	        </Select>
	        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={(value)=>this.onSecondCityChange(value)}>
	          {cityOptions}
	        </Select>
	      </div>
	    );
	  }
}