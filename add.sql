create table product (
    product_id serial primary key not null,
    name varchar(40) not null,
    description varchar(80) not null,
    price interger not null,
    image_url text not null
);

insert into product (name, description, price, image_url) values ($1, $2, $3, $4,);

select * from product;

select * from product where product_id = $1;

update product set description = $2 where product_id = $1;

delete from product where product_id = $1;

