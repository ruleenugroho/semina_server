
# Speck API

| Name | Routes | HTTP | Deskripsi | Dibuat | Hasil Test | Middleware Auth |
| --- | --- | --- | --- | --- | --- | --- |
| CMS |  |  |  |  |  |  |
| Categories |  |  |  |  |  |  |
|  | /api/v1/cms/categories | GET | Get all categories |  |  | Ya |
|  | /api/v1/cms/categories | POST | Create categories |  |  | Ya |
|  | /api/v1/cms/categories/:id | GET | Get one categories by id |  |  | Ya |
|  | /api/v1/cms/categories/:id | PUT | Update categories |  |  | Ya |
|  | /api/v1/cms/categories/:id | DELETE | Delete categories |  |  | Ya |
| Talents |  |  |  |  |  |  |
|  | /api/v1/cms/talents | GET | Get all talents |  |  | Ya |
|  | /api/v1/cms/talents | POST | Create talents |  |  | Ya |
|  | /api/v1/cms/talents/:id | GET | Get one talents by id |  |  | Ya |
|  | /api/v1/cms/talents/:id | PUT | Update talents |  |  | Ya |
|  | /api/v1/cms/talents/:id | DELETE | Delete talents |  |  | Ya |
|  |  |  |  |  |  |  |
| Images |  |  |  |  |  |  |
|  | /api/v1/cms/images | POST | Create images |  |  | Ya |
|  |  |  |  |  |  |  |
| Events |  |  |  |  |  |  |
|  | /api/v1/cms/events | GET | Get all events |  |  | Ya |
|  | /api/v1/cms/events | POST | Create events |  |  | Ya |
|  | /api/v1/cms/events/:id | GET | Get one event by id |  |  | Ya |
|  | /api/v1/cms/events/:id | PUT | Update events |  |  | Ya |
|  | /api/v1/cms/events/:id | DELETE | Delete events |  |  | Ya |
|  | /api/v1/cms/events/:id/status | PUT | Update status events |  |  | Ya |
|  |  |  |  |  |  |  |
| Payments |  |  |  |  |  |  |
|  | /api/v1/cms/payments | GET | Get all payments |  |  | Ya |
|  | /api/v1/cms/payments | POST | Create payments |  |  | Ya |
|  | /api/v1/cms/payments/:id | GET | Get one payments by id |  |  | Ya |
|  | /api/v1/cms/payments/:id | PUT | Update payments |  |  | Ya |
|  | /api/v1/cms/payments/:id | DELETE | Delete payments |  |  | Ya |
|  |  |  |  |  |  |  |
| Tickets Categories |  |  |  |  |  |  |
|  | /api/v1/cms/tickets-categories | GET | Get all ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories | POST | Create ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | GET | Get one ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | PUT | Update ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | DELETE | Delete ticket categories |  |  | Ya |
|  |  |  |  |  |  |  |
| Order |  |  |  |  |  |  |
|  | /api/v1/orders | GET | Get all order |  |  | Ya |
|  | /api/v1/orders/:id | GET | Get one order by id |  |  | Ya |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| Auth |  |  |  |  |  |  |
|  | /api/v1/auth/signin | POST | Signin |  |  | Tidak |
|  | /api/v1/cms/organizers | POST | Create admin / organizer |  |  | Ya |
|  |  |  |  |  |  |  |
| Participants |  |  |  |  |  |  |
|  | /api/v1/events | GET | Get all events |  |  | Tidak |
|  | /api/v1/events/:id | GET | Get detail events by id |    |  | Tidak |
|  | /api/v1/events/:id/checkout | POST | Checkout events |  |  | Ya |
|  | /api/v1/dashboard | GET | Get dashboard |  |  | Ya |
|  | /api/v1/dashboard/:id | GET | Get detail dashboard by id |  |  | Ya |
|  | /api/v1/participants/auth/signin | POST | Signin |  |  | Tidak |
|  | /api/v1/participants/auth/signup | POST | Signup |  |  | Tidak |
|  |  |  |  |  |  |  |

# Categories

---

## GET Categories List

`https://[host]:[port]/api/v1/cms/categories`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
		{
			"_id" : 1231312312312,
			"name" : "Express Js",
		},
		{
			"_id" : 1231312312313,
			"name" : "Mongodb",
		}
	]
}
```

## POST Create Categories

`https://[host]:[port]/api/v1/cms/categories`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "nodejs"
}
```

**Response body Example :** 

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "nodejs",
		"organizer" : id_organizer
	}
}
```

## GET Categories Detail

`https://[host]:[port]/api/v1/cms/categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| categories_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "nodejs"
	}
}
```

## PUT Update Categories

`https://[host]:[port]/api/v1/cms/categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| categories_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "reactjs"
}
```

**Response body Example :** 

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "reactjs",
		"organizer" : id_organizer
	}
}
```

## DELETE Categories

`https://[host]:[port]/api/v1/cms/categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| categories_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "string",
		"organizer" : id_organizer
	}
}
```

# Talents

---

## GET Talents List

`https://[host]:[port]/api/v1/cms/talents`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
		{
			"_id" : 1231312312312,
			"name" : "Talent1",
			"image_url" : "uploads/1.png",
		},
		{
			"_id" : 1231312312313,
			"name" : "Talent2",
			"image_url" : "uploads/2.png",
		}
	]
}
```

## POST Create Talents

`https://[host]:[port]/api/v1/cms/talents`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "Talent3",
	"image" : 54321,
}
```

**Response body Example :** 

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "Talent3",
		"image" : 54321,
		"organizer" : id_organizer
	}
}
```

## GET Talents Detail

`https://[host]:[port]/api/v1/cms/talents/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| talents_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "talent3",
		"image_url" : "uploads/3.png",
	}
}
```

## PUT Update Talents

`https://[host]:[port]/api/v1/cms/talents/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| talents_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "talent31",
	"image" : 54321,
}
```

**Response body Example :** 

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "talent31",
		"image" : 54321,
		"organizer" : id_organizer
	}
}
```

## DELETE Talents

`https://[host]:[port]/api/v1/cms/talents/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| talents_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 7864523856783456,
		"name" : "talent31",
		"image" : 54321,
		"organizer" : id_organizer
	}
}
```

# Images

---

## POST Create Images

`https://[host]:[port]/api/v1/cms/images`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

```jsx
{
	"file" : file binary
}
```

**Response body Example :** 

```jsx
{
	"data": {
		"url" : '/upload/name-image.png'
	}
}
```

# Events

---

## GET Events List

`https://[host]:[port]/api/v1/cms/events`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
		{
			"_id" : 1231312312312,
			"title" : "event mern",
			"date" : "2022-11-26 07:55:41",
			"about" : "description",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'active',
			"categories" : {
				"_id" : 291839213,
				"name" : "string"
			},
			"image" : {
						"_id" : 827382138172,
						"name" : "string"
				},
			"talent" : {
						"_id" : 827382138172,
						"name" : "string"
				},
			"organizer" : {
						"_id" : 827382138172,
						"name" : "string"
				}
		},
		{
			"_id" : 1231312312313,
			"title" : "event mern2",
			"date" : "2022-11-26 07:55:41",
			"about" : "description",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'pending',
			"categories" : {
				"_id" : 291839213,
				"name" : "string"
			},
			"image" : {
						"_id" : 827382138172,
						"name" : "string"
				},
			"talent" : {
						"_id" : 827382138172,
						"name" : "string"
				},
			"organizer" : {
						"_id" : 827382138172,
						"name" : "string"
				}
		},
	]
}
```

## POST Create Events

`https://[host]:[port]/api/v1/cms/events`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
		"title" : "string",
		"date" : date,
		"about" : "string",
		"tagline" : "string",
		"keypoint" : "string[]",
		"venue_name" : "string",
		"categories" : id_categories,
		"image" : id_image,
		"talent" : id_talent,
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 1231312312313,
			"title" : "string",
			"date" : date,
			"about" : "string",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'pending',
			"categories" : id_categories,
			"image" : id_image,
			"talent" : id_talent,
			"organizer" : id_organizer
	}
}
```

## GET Events Detail

`https://[host]:[port]/api/v1/cms/events/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| events_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 1231312312313,
		"title" : "event mern2",
		"date" : "2022-11-26 07:55:41",
		"about" : "description",
		"tagline" : "string",
		"keypoint" : [
			"string", "string"
		],
		"venue_name" : "string",
		"status" : 'pending',
		"categories" : {
			"_id" : 291839213,
			"name" : "string"
		},
		"image" : {
					"_id" : 827382138172,
					"name" : "string"
			},
		"talent" : {
					"_id" : 827382138172,
					"name" : "string"
			},
		"organizer" : {
					"_id" : 827382138172,
					"name" : "string"
			}
	},
}
```

## PUT Update Events

`https://[host]:[port]/api/v1/cms/events/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| events_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
		"title" : "string",
		"date" : date,
		"about" : "string",
		"tagline" : "string",
		"keypoint" : "string[]",
		"venue_name" : "string",
		"categories" : id_categories,
		"image" : id_image,
		"talent" : id_talent,
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 1231312312313,
			"title" : "string",
			"date" : date,
			"about" : "string",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'pending',
			"categories" : id_categories,
			"image" : id_image,
			"talent" : id_talent,
			"organizer" : id_organizer
	}
}
```

## DELETE Events

`https://[host]:[port]/api/v1/cms/events/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| events_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response Body Example**:

```jsx
{
	"data": {
			"_id" : 1231312312313,
			"title" : "string",
			"date" : date,
			"about" : "string",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'pending',
			"categories" : id_categories,
			"image" : id_image,
			"talent" : id_talent,
			"organizer" : id_organizer
	}
}
```

## PUT Update Status Events

`https://[host]:[port]/api/v1/cms/events/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| events_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 1231312312313,
			"title" : "string",
			"date" : date,
			"about" : "string",
			"tagline" : "string",
			"keypoint" : [
				"string", "string"
			],
			"venue_name" : "string",
			"status" : 'active',
			"categories" : id_categories,
			"image" : id_image,
			"talent" : id_talent,
			"organizer" : id_organizer
	}
}
```

# Payments

---

## GET Payments List

`https://[host]:[port]/api/v1/cms/payments`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
		{
			"_id" : 1231312312312,
			"name" : "string",
			"status" : true,
			"image_url" : "uploads/nama.png",
		},
		{
			"_id" : 1231312312313,
			"name" : "string",
			"status" : false,
			"image_url" : "uploads/nama.png",
		}
	]
}
```

## POST Create Payments

`https://[host]:[port]/api/v1/cms/payments`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "string",
	"status" : true,
	"image" : id_image,
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 29183921213,
			"name" : "string",
			"status" : true,
			"image" : id_image,
			"organizer" : id_organizer
	}
}
```

## GET Payments Detail

`https://[host]:[port]/api/v1/cms/payments/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| payments_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
		"_id" : 1231312312312,
		"name" : "string",
		"status" : true,
		"image_url" : "uploads/nama.png",
	}
}
```

## PUT Update Payments

`https://[host]:[port]/api/v1/cms/payments/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| payments_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
	"name" : "string",
	"status" : false,
	"image" : id_image,
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 29183921213,
			"name" : "string",
			"status" : false,
			"image" : id_image,
			"organizer" : id_organizer
	}
}
```

## DELETE Payments

`https://[host]:[port]/api/v1/cms/payments/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| payments_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response Body Example**:

```jsx
{
	"data": {
			"_id" : 29183921213,
			"name" : "string",
			"status" : true,
			"image" : id_image,
			"organizer" : id_organizer
	}
}
```

# Tickets Categories

---

## GET Tickets Categories List

`https://[host]:[port]/api/v1/cms/tickets-categories`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
		{
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "on",
			"expired" : date,
			"event" : {
						"_id" : 219391237671,
						"title" : "string",
			}
		},
		{
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "off",
			"expired" : date,
			"event" : {
						"_id" : 219391237671,
						"title" : "string",
			}
		},
	]
}
```

## POST Create Tickets Categories

`https://[host]:[port]/api/v1/cms/tickets-categories`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
		"name" : "string",
		"price" : int,
		"stock" : int,
		"type" : "string",
		"status" : "on",
		"expired" : date,
		"event" : id_event
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "on",
			"expired" : date,
			"event" : id_event
	}
}
```

## GET Tickets Categories Detail

`https://[host]:[port]/api/v1/cms/tickets-categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| tickets_categories_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "on",
			"expired" : date,
			"event" : {
						"_id" : 219391237671,
						"title" : "string",
			}
	},
}
```

## PUT Update Tickets Categories

`https://[host]:[port]/api/v1/cms/tickets-categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| tickets_categories_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

```jsx
{
		"name" : "string",
		"price" : int,
		"stock" : int,
		"type" : "string",
		"status" : "off",
		"expired" : date,
		"event" : id_event
}
```

**Response body Example :** 

```jsx
{
	"data": {
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "off",
			"expired" : date,
			"event" : id_event
	}
}
```

## DELETE Tickets Categories

`https://[host]:[port]/api/v1/cms/tickets-categories/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| tickets_categories_id |
| --- |

**Request body Example :** 

> `id organizer` di dapat dari token
> 

**Response Body Example**:

```jsx
{
	"data": {
			"_id" : 291382911221,
			"name" : "string",
			"price" : int,
			"stock" : int,
			"type" : "string",
			"status" : "on",
			"expired" : date,
			"event" : id_event
	}
}
```

# Orders

---

## GET Orders List

`https://[host]:[port]/api/v1/cms/orders`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Response Body Example**:

```jsx
{
	"data" : [
			{
					"_id" : 2132813728,
					"history_ticket_categories" : date,
					"sum_ticket" : "string",
					"order" : {
									"_id" : 2132813728,
									"date" : date,
									"status" : "string",
									"total_pay" : int,
									"total_order_ticket" : int,
									"participant" : id_participant,
									"event" : id_event,
									"personalDetail" : {},
					},
					"ticket_categories" :  {
									"_id" : 2132813728,
									"name" : "string",
									"price" : int,
					},
			},
			{
					"_id" : 2132813728,
					"history_ticket_categories" : date,
					"sum_ticket" : "string",
					"order" : {
									"_id" : 2132813728,
									"date" : date,
									"status" : "string",
									"total_pay" : int,
									"total_order_ticket" : int,
									"participant" : id_participant,
									"event" : id_event,
									"personalDetail" : {},
					},
					"ticket_categories" :  {
									"_id" : 2132813728,
									"name" : "string",
									"price" : int,
					},
			}
	 ]
}
```

## GET Orders Detail

`https://[host]:[port]/api/v1/orders/:id`

**Request Headers**

| Authorization | Bearer 2fvmer3qbk7f3jnqneg58bu2sdfasfjslkjljhnvc2432hjfdsh |
| --- | --- |

**Request Query**

| orders_id |
| --- |

**Response Body Example**:

```jsx
{
	"data": {
				"_id" : 2132813728,
				"history_ticket_categories" : date,
				"sum_ticket" : int,
				"order" : {
								"_id" : 2132813728,
								"date" : date,
								"status" : "string",
								"total_pay" : int,
								"total_order_ticket" : int,
								"participant" : id_participant,
								"event" : id_event,
								"personalDetail" : {},
				},
				"ticket_categories" :  {
								"_id" : 2132813728,
								"name" : "string",
								"price" : int,
				},
	}
}
```

# Auth

---

## POST Signin

`https://[host]:[port]/api/v1/auth/signin`

**Request body raw Example :** 

```jsx
{
		"email" : "string",
		"password" : "string"
}
```

**Response body Example :** 

```jsx
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXIiOnsiaWQiOiI2MGJjZWU2OTU2MDNlNjY5MzYzMGM1ZGUiLCJ1c2VybmFtZSI6InBsYXllciIsImVtYWlsIjoicGxheWVyQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiMDgxMTExMTExMTExIiwiYXZhdGFyIjoiNWMzNjlhY2Q2ZGZhYTU3ZTk4OGYxMGUyOTE0YmIwMzMucG5nIn0sImlhdCI6MTY1NjQ5NzAyM30.9viWloFAQzLzFSorrelZoaEAOUpwa0ZCjugIDH4vpFA"
    }
}
```

## POST Signup Organizer

`https://[host]:[port]/api/v1/cms/organizers`

**Request body raw Example :** 

```jsx
{
		"name" : "string",
		"email" : "string"
		"password" : "string"
		"role" : id_role_organizer
}
```

**Response body Example :** 

```jsx
{
  "data": {
			"_id" : 291382911221,
			"name" : "string",
			"email" : "string"
			"password" : "string"
			"role" : id_role_organizer,
			"organizer" : id_organizer
	},
}
```

## POST Signup Admin

`https://[host]:[port]/api/v1/cms/organizers`

**Request body form-data Example :** 

```jsx
{
		"name" : "string",
		"email" : "string"
		"password" : "string"
		"role" : id_role_admin,
		"organizer" : id_organizer
}
```

**Response body Example :** 

```jsx
{
  "data": {
			"_id" : 291382911221,
			"name" : "string",
			"email" : "string"
			"password" : "string"
			"role" : id_role_admin,
			"organizer" : id_organizer
	},
}
```
