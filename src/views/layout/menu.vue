<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">WelcomeToTheWorld</v-list-item-title>
        <v-list-item-subtitle> 관리자페이지 </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-group
        v-for="game in games"
        :key="game.title"
        :value="game.isOpen"
        :prepend-icon="game.icon"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ game.title }}</v-list-item-title>
        </template>

        <v-list-group
          v-for="(item, i) in game.menus"
          :key="i"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </template>
          <v-list-item v-for="(subItem, i) in item.sub" :key="i" link>
            <v-list-item-title>{{ subItem }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    games: [
      {
        title: '냐한남자',
        icon: 'mdi-view-dashboard',
        isOpen: true,
        menus: [
          { title: '회원' },
          { title: '우편함', sub: ['우편 생성', '우편 목록'] }
        ]
      },
      { title: '게임 미정', icon: 'mdi-help-box', isOpen: false }
    ],
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' }
    ]
  })
}
</script>

<style></style>
