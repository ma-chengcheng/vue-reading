import Cookies from 'js-cookie'

export let config = {
  headers: {'X-CSRFtoken': Cookies.get('csrftoken')}
}
