//USER Template
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user'+this.id;
    },
    email: function(){
	return this.username + '@gmail.com';
  },
    password: 'md5(pass)',
    img:function(tags){
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss")}}'
  }
]

//animal profile
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    type: '{{random("tulips","roses","orchids")}}',
    color: function(tags) {
      var color = {
        tulips:["pink","orange","blue"],
        roses:["red","white","yellow"],
        horse:["black","brown","magenta"]
      };
      var chosen_type = color[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    description: '{{lorem(3,"sentences")}}',
    img:function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.name;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]